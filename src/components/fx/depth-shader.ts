/** Raw WebGL 2 renderer for the depth-map portrait (no three.js: it is ~4 KB instead of ~150 KB). */

const VERTEX = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAGMENT = `#version 300 es
precision mediump float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uImage;
uniform sampler2D uDepth;
uniform vec2 uPointer;
uniform float uTime;
uniform float uHover;
const vec3 LIME = vec3(0.776, 1.0, 0.239);
void main() {
  float depth = texture(uDepth, vUv).r;
  vec2 uv = vUv + uPointer * (depth - 0.3) * 0.03;
  vec3 color = texture(uImage, uv).rgb;
  float subject = smoothstep(0.25, 0.55, texture(uDepth, uv).r);
  float rows = step(0.86, fract(uv.y * 150.0));
  float cols = step(0.93, fract(uv.x * 70.0 + depth * 6.0));
  float grid = max(rows, cols * 0.6) * subject;
  float sweep = smoothstep(0.06, 0.0, abs(fract(uTime * 0.12) * 1.3 - 0.15 - (1.0 - uv.y))) * subject;
  color += LIME * grid * (0.06 + 0.22 * uHover);
  color += LIME * sweep * 0.35;
  outColor = vec4(color, 1.0);
}`;

export interface DepthRenderer {
  render(pointerX: number, pointerY: number, hover: number, time: number): void;
  resize(): void;
  dispose(): void;
}

function compile(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("createShader failed");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? "shader compile failed");
  }
  return shader;
}

function texture(gl: WebGL2RenderingContext, unit: number, image: HTMLImageElement): WebGLTexture {
  const tex = gl.createTexture();
  if (!tex) throw new Error("createTexture failed");
  gl.activeTexture(gl.TEXTURE0 + unit);
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return tex;
}

/** Sets up the portrait shader on `canvas`. Throws when WebGL 2 or the shaders are unavailable. */
export function createDepthRenderer(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  depth: HTMLImageElement,
): DepthRenderer {
  const gl = canvas.getContext("webgl2", { premultipliedAlpha: false, antialias: false });
  if (!gl) throw new Error("WebGL 2 unavailable");

  const program = gl.createProgram();
  const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) ?? "program link failed");
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(program, "aPos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const imageTex = texture(gl, 0, image);
  const depthTex = texture(gl, 1, depth);
  gl.uniform1i(gl.getUniformLocation(program, "uImage"), 0);
  gl.uniform1i(gl.getUniformLocation(program, "uDepth"), 1);
  const uPointer = gl.getUniformLocation(program, "uPointer");
  const uTime = gl.getUniformLocation(program, "uTime");
  const uHover = gl.getUniformLocation(program, "uHover");

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(canvas.clientWidth * dpr));
    canvas.height = Math.max(1, Math.round(canvas.clientHeight * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  };
  resize();

  return {
    render(pointerX, pointerY, hover, time) {
      gl.uniform2f(uPointer, pointerX, pointerY);
      gl.uniform1f(uHover, hover);
      gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
    resize,
    dispose() {
      gl.deleteTexture(imageTex);
      gl.deleteTexture(depthTex);
      gl.deleteBuffer(buffer);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteProgram(program);
    },
  };
}
