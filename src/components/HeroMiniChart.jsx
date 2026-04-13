/**
 * Decorative trend preview for the hero panel (no live data).
 */
export default function HeroMiniChart() {
  return (
    <div className="hero-mini-chart" aria-hidden="true">
      <p className="hero-mini-chart__label">clean_ratio trend</p>
      <svg
        className="hero-mini-chart__svg"
        viewBox="0 0 200 88"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(62, 207, 142, 0.35)" />
            <stop offset="100%" stopColor="rgba(62, 207, 142, 0)" />
          </linearGradient>
          <linearGradient id="heroChartLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#5fdfaa" />
          </linearGradient>
        </defs>
        <rect
          x="8"
          y="8"
          width="184"
          height="72"
          rx="8"
          fill="rgba(0, 0, 0, 0.2)"
          stroke="rgba(255, 255, 255, 0.06)"
        />
        <path
          d="M 24 58 L 52 52 L 80 48 L 108 38 L 136 34 L 164 28 L 188 22"
          fill="none"
          stroke="url(#heroChartLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 24 58 L 52 52 L 80 48 L 108 38 L 136 34 L 164 28 L 188 22 L 188 72 L 24 72 Z"
          fill="url(#heroChartFill)"
        />
      </svg>
    </div>
  )
}
