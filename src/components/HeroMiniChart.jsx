/**
 * Decorative trend preview for the hero panel (no live data).
 */
export default function HeroMiniChart() {
  return (
    <div className="hero-mini-chart" aria-hidden="true">
      <p className="hero-mini-chart__label">My progress over time</p>
      <svg
        className="hero-mini-chart__svg"
        viewBox="0 0 200 88"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(46, 240, 160, 0.5)" />
            <stop offset="55%" stopColor="rgba(46, 240, 160, 0.18)" />
            <stop offset="100%" stopColor="rgba(46, 240, 160, 0)" />
          </linearGradient>
          <linearGradient id="heroChartLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5fffb8" />
            <stop offset="50%" stopColor="#2ef0a0" />
            <stop offset="100%" stopColor="#1ad698" />
          </linearGradient>
          <filter
            id="heroChartGlow"
            x="-35%"
            y="-35%"
            width="170%"
            height="170%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect
          x="8"
          y="8"
          width="184"
          height="72"
          rx="8"
          fill="rgba(0, 0, 0, 0.35)"
          stroke="rgba(46, 240, 160, 0.12)"
        />
        <path
          d="M 24 58 L 52 52 L 80 48 L 108 38 L 136 34 L 164 28 L 188 22 L 188 72 L 24 72 Z"
          fill="url(#heroChartFill)"
          opacity="0.95"
        />
        <path
          d="M 24 58 L 52 52 L 80 48 L 108 38 L 136 34 L 164 28 L 188 22"
          fill="none"
          stroke="url(#heroChartLine)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#heroChartGlow)"
        />
      </svg>
    </div>
  )
}
