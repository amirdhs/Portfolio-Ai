"use client";

import dynamic from "next/dynamic";
import { RobotStill } from "./RobotStill";

/** Where the flat drawing sits inside the full-bleed stage: below the text on phones, right on desktop. */
const STILL_PLACEMENT =
  "absolute bottom-0 left-1/2 h-[92%] w-auto -translate-x-1/2 lg:bottom-[6%] lg:left-auto lg:right-[6%] lg:h-[78%] lg:translate-x-0";

// Loaded after hydration, outside the first-load bundle; the drawing is server-rendered meanwhile.
const RobotCanvas = dynamic(() => import("./RobotCanvas").then((mod) => mod.RobotCanvas), {
  ssr: false,
  loading: () => (
    <div className="relative isolate size-full overflow-hidden">
      <div aria-hidden="true" className="grid-floor" />
      <RobotStill className={STILL_PLACEMENT} />
    </div>
  ),
});

interface RobotStageProps {
  /** Accessible description of the robot for screen readers. */
  label: string;
  className?: string;
}

export function RobotStage({ label, className = "" }: RobotStageProps) {
  return (
    <div role="img" aria-label={label} className={`relative ${className}`}>
      <RobotCanvas stillClassName={STILL_PLACEMENT} />
    </div>
  );
}
