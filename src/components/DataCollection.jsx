import Section from './Section'

export default function DataCollection() {
  return (
    <Section id="data-collection" className="data-section" title="How I recorded each session">
      <p>
        To ensure consistency, every session followed a fixed and repeatable structure.
      </p>

      <ul className="clean-list">
        <li>
          <strong>4 difficulty modes</strong> (increasing complexity of chord transitions)
        </li>
        <li>
          <strong>6 speed levels</strong> from <span className="highlight">60 → 110 BPM</span>
        </li>
        <li>
          <strong>4 trials per condition</strong> to reduce randomness
        </li>
        <li>
          Performance measured as <strong>successful transitions (accuracy)</strong>
        </li>
      </ul>

      <p>
        This structure ensured that each session was{' '}
        <span className="highlight">directly comparable</span>, making patterns across time,
        speed, and difficulty <strong>reliable and measurable</strong>.
      </p>

      <p className="chart-insight">
        Each row represents one mode-speed condition, making session results easy to
        compare.
      </p>
      <div className="chart-card">
        <h3 className="chart-title">Example of raw session data (Session 3)</h3>

        <div className="chart-container image-container">
          <img
            src="/figures/session_3_data_example.png"
            alt="Session 3 data table"
            className="session-image"
          />
        </div>
      </div>
    </Section>
  )
}
