import {
  CapsuleGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  SphereGeometry,
  TorusGeometry,
  type Object3D,
} from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export interface RobotParts {
  root: Group;
  /** Floats up and down; everything visible hangs off it. */
  body: Group;
  head: Group;
  eyes: Mesh[];
  armL: Object3D;
  armR: Object3D;
  hoverRing: Mesh;
}

export const LIME = 0xc6ff3d;
const SHELL = 0x1b211d;
const SHELL_LIGHT = 0x2c352f;
const VISOR = 0x050806;

/** Builds the stylised hover-bot: rounded shell, visor head with lime eyes, short arms. */
export function buildRobot(): RobotParts {
  const shell = new MeshStandardMaterial({ color: SHELL, metalness: 0.55, roughness: 0.38 });
  const shellLight = new MeshStandardMaterial({
    color: SHELL_LIGHT,
    metalness: 0.4,
    roughness: 0.5,
  });
  const visor = new MeshStandardMaterial({ color: VISOR, metalness: 0.9, roughness: 0.12 });
  const glow = new MeshBasicMaterial({ color: LIME, toneMapped: false });

  const root = new Group();
  const body = new Group();
  root.add(body);

  // Torso: a capsule with a chest light.
  const torso = new Mesh(new CapsuleGeometry(0.72, 0.55, 8, 24), shell);
  torso.position.y = 1.35;
  body.add(torso);

  const chestPlate = new Mesh(new RoundedBoxGeometry(0.62, 0.42, 0.12, 4, 0.08), shellLight);
  chestPlate.position.set(0, 1.45, 0.68);
  body.add(chestPlate);

  const chestLight = new Mesh(new TorusGeometry(0.11, 0.035, 12, 32), glow);
  chestLight.position.set(0, 1.45, 0.75);
  body.add(chestLight);

  // Hover ring under the torso instead of legs.
  const hoverRing = new Mesh(new TorusGeometry(0.48, 0.045, 12, 48), glow);
  hoverRing.rotation.x = Math.PI / 2;
  hoverRing.position.y = 0.42;
  body.add(hoverRing);

  // Neck and head (head pivots at the neck).
  const neck = new Mesh(new CylinderGeometry(0.16, 0.2, 0.22, 20), shellLight);
  neck.position.y = 2.2;
  body.add(neck);

  const head = new Group();
  head.position.y = 2.3;
  body.add(head);

  const skull = new Mesh(new RoundedBoxGeometry(1.5, 1.05, 1.1, 6, 0.32), shell);
  skull.position.y = 0.55;
  head.add(skull);

  const face = new Mesh(new RoundedBoxGeometry(1.22, 0.7, 0.12, 4, 0.18), visor);
  face.position.set(0, 0.55, 0.52);
  head.add(face);

  const eyes = [-0.27, 0.27].map((x) => {
    const eye = new Mesh(new CapsuleGeometry(0.075, 0.1, 6, 16), glow);
    eye.position.set(x, 0.58, 0.6);
    head.add(eye);
    return eye;
  });

  for (const side of [-1, 1]) {
    const ear = new Mesh(new CylinderGeometry(0.17, 0.17, 0.14, 24), shellLight);
    ear.rotation.z = Math.PI / 2;
    ear.position.set(side * 0.8, 0.55, 0);
    head.add(ear);
    const earLight = new Mesh(new TorusGeometry(0.1, 0.025, 10, 28), glow);
    earLight.rotation.y = Math.PI / 2;
    earLight.position.set(side * 0.88, 0.55, 0);
    head.add(earLight);
  }

  const antenna = new Mesh(new CylinderGeometry(0.025, 0.025, 0.36, 10), shellLight);
  antenna.position.set(0, 1.24, 0);
  head.add(antenna);
  const antennaTip = new Mesh(new SphereGeometry(0.075, 16, 16), glow);
  antennaTip.position.set(0, 1.45, 0);
  head.add(antennaTip);

  const makeArm = (side: -1 | 1): Object3D => {
    const shoulder = new Group();
    shoulder.position.set(side * 0.86, 1.72, 0);
    const upper = new Mesh(new CapsuleGeometry(0.15, 0.62, 6, 16), shell);
    upper.position.y = -0.42;
    shoulder.add(upper);
    const hand = new Mesh(new SphereGeometry(0.2, 20, 20), shellLight);
    hand.position.y = -0.92;
    shoulder.add(hand);
    shoulder.rotation.z = side * 0.18;
    body.add(shoulder);
    return shoulder;
  };

  const armL = makeArm(-1);
  const armR = makeArm(1);

  return { root, body, head, eyes, armL, armR, hoverRing };
}
