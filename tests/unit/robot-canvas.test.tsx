import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { RobotCanvas } from "@/components/robot/RobotCanvas";

const scene = {
  setPointer: vi.fn(),
  setScroll: vi.fn(),
  setActive: vi.fn(),
  resize: vi.fn(),
  dispose: vi.fn(),
};
const createRobotScene = vi.fn(() => scene);
vi.mock("@/components/robot/robot-scene", () => ({ createRobotScene }));

function mockMotionPreference(reduced: boolean) {
  window.matchMedia = vi.fn((query: string) => ({
    matches: reduced && query.includes("reduce"),
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}

function mockWebgl(available: boolean) {
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(
    () => (available ? ({} as RenderingContext) : null) as never,
  );
}

describe("RobotCanvas", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockMotionPreference(false);
  });

  afterEach(() => vi.restoreAllMocks());

  it("shows the still robot when WebGL is unavailable", async () => {
    mockWebgl(false);
    render(<RobotCanvas />);
    expect(await screen.findByTestId("robot-still")).toBeInTheDocument();
    expect(createRobotScene).not.toHaveBeenCalled();
  });

  it("shows the still robot for visitors who prefer reduced motion", async () => {
    mockWebgl(true);
    mockMotionPreference(true);
    render(<RobotCanvas />);
    expect(await screen.findByTestId("robot-still")).toBeInTheDocument();
    expect(createRobotScene).not.toHaveBeenCalled();
  });

  it("shows the still robot when the 3D scene fails to start", async () => {
    mockWebgl(true);
    vi.spyOn(console, "warn").mockImplementation(() => {});
    createRobotScene.mockImplementationOnce(() => {
      throw new Error("context lost");
    });
    render(<RobotCanvas />);
    expect(await screen.findByTestId("robot-still")).toBeInTheDocument();
    expect(console.warn).toHaveBeenCalledTimes(1);
  });

  it("starts the 3D scene and disposes it on unmount", async () => {
    mockWebgl(true);
    const { unmount, container } = render(<RobotCanvas />);
    await waitFor(() => expect(createRobotScene).toHaveBeenCalledTimes(1));
    fireEvent.transitionEnd(container.querySelector("canvas")!);
    await waitFor(() => expect(screen.queryByTestId("robot-still")).not.toBeInTheDocument());
    unmount();
    expect(scene.dispose).toHaveBeenCalledTimes(1);
  });

  it("keeps the drawing visible until the 3D canvas has faded in", async () => {
    mockWebgl(true);
    render(<RobotCanvas />);
    await waitFor(() => expect(createRobotScene).toHaveBeenCalledTimes(1));
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(screen.getByTestId("robot-still")).toBeInTheDocument();
  });

  it("falls back to the drawing when the WebGL context is lost", async () => {
    mockWebgl(true);
    const { container } = render(<RobotCanvas />);
    await waitFor(() => expect(createRobotScene).toHaveBeenCalledTimes(1));
    fireEvent(container.querySelector("canvas")!, new Event("webglcontextlost"));
    expect(await screen.findByTestId("robot-still")).toBeInTheDocument();
    expect(container.querySelector("canvas")).toBeNull();
    expect(scene.dispose).toHaveBeenCalledTimes(1);
  });
});
