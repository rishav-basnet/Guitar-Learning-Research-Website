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

      <div className="chart-card">
        <h3 className="chart-title">Example of raw session data (Session 3)</h3>

        <p className="chart-insight">
          Each row represents a specific combination of mode and speed, along with
          performance outcomes.
        </p>

        <div className="chart-container">
          <img
            src="/figures/session_3_data_example.png"
            alt="Session 3 data table"
            className="data-image"
          />
        </div>
      </div>
    </Section>
  )
}
