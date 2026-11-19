/**
 * Flat drawing of the hero robot on its grid floor. Server-rendered placeholder while the 3D scene
 * loads, and the permanent picture for reduced motion or devices without WebGL.
 */
export function RobotStill({ className = "" }: { className?: string }) {
  const lime = "oklch(91% 0.21 125)";
  const shell = "oklch(24% 0.014 150)";
  const shellLight = "oklch(32% 0.016 150)";
  return (
    <svg
      data-testid="robot-still"
      aria-hidden="true"
      viewBox="0 0 400 480"
      className={className}
      fill="none"
    >
      <defs>
        <radialGradient id="robot-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={lime} stopOpacity="0.55" />
          <stop offset="100%" stopColor={lime} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="robot-floor-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={lime} stopOpacity="0" />
          <stop offset="100%" stopColor={lime} stopOpacity="0.45" />
        </linearGradient>
      </defs>

      {/* Perspective grid floor */}
      <g stroke="url(#robot-floor-fade)" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`h${i}`} x1="0" x2="400" y1={392 + i * i * 3.4} y2={392 + i * i * 3.4} />
        ))}
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
          <line key={`v${i}`} x1={200 + i * 18} y1="390" x2={200 + i * 70} y2="480" />
        ))}
      </g>
      <ellipse cx="200" cy="408" rx="120" ry="26" fill="url(#robot-glow)" />

      {/* Hover ring */}
      <ellipse cx="200" cy="356" rx="54" ry="11" stroke={lime} strokeWidth="6" />

      {/* Arms */}
      <rect
        x="96"
        y="214"
        width="30"
        height="104"
        rx="15"
        fill={shell}
        transform="rotate(10 111 220)"
      />
      <circle cx="102" cy="322" r="20" fill={shellLight} />
      <rect
        x="274"
        y="214"
        width="30"
        height="104"
        rx="15"
        fill={shell}
        transform="rotate(-10 289 220)"
      />
      <circle cx="298" cy="322" r="20" fill={shellLight} />

      {/* Torso */}
      <rect x="128" y="190" width="144" height="160" rx="72" fill={shell} />
      <rect x="169" y="230" width="62" height="42" rx="10" fill={shellLight} />
      <circle cx="200" cy="251" r="11" stroke={lime} strokeWidth="4" />

      {/* Neck and head */}
      <rect x="184" y="172" width="32" height="24" rx="6" fill={shellLight} />
      <rect x="125" y="68" width="150" height="108" rx="32" fill={shell} />
      <rect x="139" y="86" width="122" height="70" rx="18" fill="oklch(8% 0.01 150)" />
      <rect x="167" y="108" width="15" height="25" rx="7.5" fill={lime} />
      <rect x="218" y="108" width="15" height="25" rx="7.5" fill={lime} />
      <rect x="112" y="106" width="14" height="32" rx="5" fill={shellLight} />
      <rect x="274" y="106" width="14" height="32" rx="5" fill={shellLight} />
      <line x1="200" y1="68" x2="200" y2="40" stroke={shellLight} strokeWidth="5" />
      <circle cx="200" cy="34" r="8" fill={lime} />
    </svg>
  );
}
