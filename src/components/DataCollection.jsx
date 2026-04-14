import Section from './Section'
import SessionTable from './SessionTable'

export default function DataCollection() {
  return (
    <Section
      id="data-collection"
      className="data-section session-section"
      title="How I recorded each session"
    >
      <div className="text-container">
        <p>
          To ensure consistency, every session followed a fixed and repeatable
          structure.
        </p>

        <ul className="clean-list">
          <li>
            <strong>4 difficulty modes</strong> (increasing complexity of chord
            transitions)
          </li>
          <li>
            <strong>6 speed levels</strong> from{' '}
            <span className="highlight">60 → 110 BPM</span>
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
          <span className="highlight">directly comparable</span>, making patterns
          across time, speed, and difficulty{' '}
          <strong>reliable and measurable</strong>.
        </p>

        <p className="chart-insight session-caption">
          <span className="highlight">
            Each row represents one mode-speed condition, making session results
            easy to compare.
          </span>
        </p>
      </div>
      <div className="chart-card">
        <h3 className="chart-title">Example of raw session data (Session 3)</h3>
        <SessionTable />
      </div>
    </Section>
  )
}
