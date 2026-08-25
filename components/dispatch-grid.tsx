const routes = [
  { id: 'r1', d: 'M -60 140 C 160 140 240 280 480 280 S 760 400 900 400', dur: 9 },
  { id: 'r2', d: 'M 900 80 C 660 80 560 230 360 230 S 120 380 -60 380', dur: 11 },
  { id: 'r3', d: 'M 140 680 C 140 470 320 430 440 300 S 640 150 720 -40', dur: 10 },
  { id: 'r4', d: 'M -60 520 C 200 520 320 560 520 540 S 820 470 940 470', dur: 12 },
]

// Points where routes converge — the "hotspots" the AI pre-positions for.
const hotspots = [
  { cx: 480, cy: 280, delay: 0 },
  { cx: 360, cy: 230, delay: 0.8 },
  { cx: 520, cy: 540, delay: 1.6 },
]

export function DispatchGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-70 [mask-image:radial-gradient(80%_80%_at_60%_20%,black,transparent_85%)]"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <filter id="blip-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern id="blocks" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M 80 0 L 0 0 0 80"
              stroke="var(--border)"
              strokeWidth="1"
              opacity="0.6"
            />
          </pattern>
        </defs>

        {/* City block grid */}
        <rect width="800" height="600" fill="url(#blocks)" />

        {/* Avenues */}
        <path d="M 0 240 H 800" stroke="var(--border)" strokeWidth="2" opacity="0.9" />
        <path d="M 320 0 V 600" stroke="var(--border)" strokeWidth="2" opacity="0.9" />

        {/* Routes */}
        {routes.map((r) => (
          <path
            key={r.id}
            id={r.id}
            d={r.d}
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            strokeDasharray="2 8"
            strokeLinecap="round"
          />
        ))}

        {/* Convergence hotspots */}
        {hotspots.map((h, i) => (
          <g key={i}>
            <circle cx={h.cx} cy={h.cy} r="4" fill="var(--positive)" opacity="0.8" />
            <circle cx={h.cx} cy={h.cy} r="4" fill="none" stroke="var(--positive)" strokeWidth="1.5">
              <animate
                attributeName="r"
                values="4;22"
                dur="2.4s"
                begin={`${h.delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0"
                dur="2.4s"
                begin={`${h.delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* Traveling vehicles */}
        {routes.map((r, i) => (
          <circle key={`v-${r.id}`} r="3.5" fill="var(--accent)" filter="url(#blip-glow)">
            <animateMotion
              dur={`${r.dur}s`}
              begin={`${i * 1.3}s`}
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href={`#${r.id}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>
    </div>
  )
}
