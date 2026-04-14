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
        Over the week, performance improved overall — but not in a straight
        line.
      </p>
      <p>
        In the first few sessions, results were inconsistent. Mistakes were
        common, especially at higher speeds and in harder modes.
      </p>
      <p>
        By the middle of the week, easier conditions became more reliable.
        Lower BPM levels and simpler modes started to show consistently higher
        success rates.
      </p>
      <p>
        However, harder conditions remained challenging throughout. Even in
        later sessions, performance did not improve equally across all
        difficulty levels.
      </p>
      <p>
        There were also small dips and plateaus, showing that progress was not
        perfectly smooth.
      </p>
      <p>
        Overall, the data shows clear improvement — but also reflects how
        uneven and condition-dependent learning can be.
      </p>
      <div className="chart-container">
        <img
          className="chart-image"
          src="/figures/learning_progression_clean_ratio.png"
          alt="Learning progression chart showing average clean ratio by session"
          loading="lazy"
        />
        <p className="chart-caption">Performance trend across sessions</p>
      </div>
    </Section>
  )
}
