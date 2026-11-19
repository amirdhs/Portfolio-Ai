import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  CanvasTexture,
  Clock,
  DirectionalLight,
  Fog,
  GridHelper,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  PMREMGenerator,
  PointLight,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
  type Material,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import {
  capPixelRatio,
  damp,
  headTarget,
  scrollLean,
  waveAngle,
  waveRaise,
} from "@/lib/robot/motion";
import { buildRobot, LIME } from "./robot-model";

export interface RobotScene {
  /** Pointer across the hero, both axes normalised to -1..1. */
  setPointer(px: number, py: number): void;
  /** How far the hero has scrolled out of view, 0..1. */
  setScroll(progress: number): void;
  /** Starts or stops the render loop (off-screen, hidden tab). */
  setActive(active: boolean): void;
  resize(): void;
  dispose(): void;
}

const FOG_COLOR = 0x0a0f0b;
const GRID_CELL = 1;
const GRID_SPEED = 0.6;
const BLINK_EVERY = 3.6;
const BLINK_LENGTH = 0.14;
const IDLE_LOOK_AFTER = 2.5;
const WAVE_DELAY = 0.4;
const WIDE_SHIFT_X = 0.26;
const WIDE_ASPECT = 1.3;

function glowTexture(): CanvasTexture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, "rgba(198,255,61,0.85)");
    gradient.addColorStop(0.4, "rgba(198,255,61,0.25)");
    gradient.addColorStop(1, "rgba(198,255,61,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }
  return new CanvasTexture(canvas);
}

/** Creates the hero scene on `canvas`. Throws if WebGL cannot be initialised. */
export function createRobotScene(canvas: HTMLCanvasElement): RobotScene {
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  scene.fog = new Fog(FOG_COLOR, 9, 26);

  const pmrem = new PMREMGenerator(renderer);
  const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = environment;

  const camera = new PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 2.4, 10.5);
  camera.lookAt(0, 1.7, 0);

  scene.add(new HemisphereLight(0xe8ffd0, 0x0a120c, 0.6));
  const key = new DirectionalLight(0xffffff, 1.6);
  key.position.set(3, 6, 5);
  scene.add(key);
  const rim = new PointLight(LIME, 18, 12, 1.6);
  rim.position.set(-2.4, 3.2, -2.2);
  scene.add(rim);

  // Lime grid floor that scrolls towards the viewer and fades into the fog.
  const grid = new GridHelper(60, 60, LIME, LIME);
  const gridMaterials = (
    Array.isArray(grid.material) ? grid.material : [grid.material]
  ) as Material[];
  for (const material of gridMaterials) {
    material.transparent = true;
    material.opacity = 0.32;
  }
  scene.add(grid);

  const floorGlow = new Mesh(
    new PlaneGeometry(5, 5),
    new MeshBasicMaterial({
      map: glowTexture(),
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
    }),
  );
  floorGlow.rotation.x = -Math.PI / 2;
  floorGlow.position.y = 0.01;
  scene.add(floorGlow);

  const robot = buildRobot();
  scene.add(robot.root);

  const clock = new Clock();
  const pointer = { x: 0, y: 0, lastMove: -Infinity };
  let scroll = 0;
  let frame = 0;
  let active = false;
  let elapsed = 0;

  const tick = () => {
    const dt = Math.min(clock.getDelta(), 0.1);
    elapsed += dt;

    // Without a recent pointer the robot looks around on its own (touch screens, idle mouse).
    const idle = elapsed - pointer.lastMove > IDLE_LOOK_AFTER;
    const lookX = idle ? Math.sin(elapsed * 0.5) * 0.6 : pointer.x;
    const lookY = idle ? Math.sin(elapsed * 0.37) * 0.25 : pointer.y;
    const target = headTarget(lookX, lookY);
    robot.head.rotation.y = damp(robot.head.rotation.y, target.yaw, 6, dt);
    robot.head.rotation.x = damp(robot.head.rotation.x, target.pitch, 6, dt);
    robot.body.rotation.y = damp(robot.body.rotation.y, target.yaw * 0.25, 3, dt);

    robot.body.position.y = 0.35 + Math.sin(elapsed * 1.6) * 0.09;
    robot.hoverRing.scale.setScalar(1 + Math.sin(elapsed * 3.2) * 0.06);
    robot.armL.rotation.z = -0.18 - Math.sin(elapsed * 1.6 + 0.6) * 0.05;
    const waveTime = elapsed - WAVE_DELAY;
    robot.armR.rotation.z =
      0.18 + Math.sin(elapsed * 1.6 + 0.6) * 0.05 + waveRaise(waveTime) + waveAngle(waveTime);

    const blinkPhase = elapsed % BLINK_EVERY;
    const eyeScale = blinkPhase < BLINK_LENGTH ? 0.15 : 1;
    for (const eye of robot.eyes) eye.scale.y = eyeScale;

    const lean = scrollLean(scroll);
    robot.root.rotation.y = lean.rotY;
    robot.root.position.y = lean.posY;

    grid.position.z = (elapsed * GRID_SPEED) % GRID_CELL;

    renderer.render(scene, camera);
    frame = active ? requestAnimationFrame(tick) : 0;
  };

  const resize = () => {
    const width = canvas.clientWidth || 1;
    const height = canvas.clientHeight || 1;
    renderer.setPixelRatio(capPixelRatio(window.devicePixelRatio));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // The canvas fills the hero; shift the view so the robot sits beside (wide) or below (narrow)
    // the headline instead of behind it.
    const wide = camera.aspect >= WIDE_ASPECT;
    camera.position.z = wide ? 10.5 : 8.6;
    if (wide) camera.setViewOffset(width, height, -width * WIDE_SHIFT_X, 0, width, height);
    else camera.clearViewOffset();
    camera.updateProjectionMatrix();
  };

  resize();

  return {
    setPointer(px, py) {
      pointer.x = px;
      pointer.y = py;
      pointer.lastMove = elapsed;
    },
    setScroll(progress) {
      scroll = progress;
    },
    setActive(next) {
      if (next === active) return;
      active = next;
      if (active) {
        clock.getDelta();
        frame = requestAnimationFrame(tick);
      } else if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    },
    resize,
    dispose() {
      active = false;
      if (frame) cancelAnimationFrame(frame);
      scene.traverse((object) => {
        if (object instanceof Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          for (const material of materials) {
            (material as MeshBasicMaterial).map?.dispose();
            material.dispose();
          }
        }
      });
      grid.geometry.dispose();
      for (const material of gridMaterials) material.dispose();
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
    },
  };
}
