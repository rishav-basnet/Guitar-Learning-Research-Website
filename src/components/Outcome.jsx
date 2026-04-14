import Section from './Section'

export default function Outcome() {
  return (
    <Section
      id="outcome"
      className="card-section"
      title={
        <>
          So, did I actually <span className="highlight">improve</span>?
        </>
      }
    >
      <p>
        Over the week, performance improved overall — but not in a
        <strong> straight line</strong>.
      </p>
      <p>
        In the first few sessions, results were inconsistent.
      </p>
      <p>
        Mistakes were common, especially at <span className="highlight">higher speeds</span> and
        in harder modes.
      </p>
      <p>
        By the middle of the week, easier conditions became more reliable.
      </p>
      <p>
        Lower BPM levels and simpler modes started to show consistently higher
        success rates.
      </p>
      <ul className="clean-list">
        <li>Harder conditions remained challenging throughout the week.</li>
        <li>Progress included dips and plateaus, not just steady growth.</li>
        <li>Improvement depended on speed and difficulty level.</li>
      </ul>
      <div className="chart-card">
        <h3 className="chart-title">How my performance improved over time</h3>
        <div className="chart-container">
          <img
            className="chart-image"
            src="/figures/learning_progression_clean_ratio.png"
            alt="Learning progression chart showing average clean ratio by session"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}
