import Section from './Section'

export default function Factors() {
  return (
    <Section
      id="factors"
      className="card-section"
      title={
        <>
          How speed and difficulty <span className="highlight">affected performance</span>
        </>
      }
    >
      <p>
        Increasing speed made chord transitions harder, but the effect
        depended on how much time was available to switch.
      </p>
      <p>
        At easier levels (Mode 1), performance stayed relatively high even at
        faster speeds. This suggests that when there is enough time to move
        between chords, speed alone is not a major problem.
      </p>
      <p>
        At moderate difficulty (Mode 2), accuracy started to drop as speed
        increased.
      </p>
      <p>
        At higher difficulty levels (Modes 3 and 4), performance dropped
        sharply. Even with practice, accuracy stayed low because there simply
        was not enough time to switch cleanly.
      </p>
      <p>
        This shows that speed does not act on its own — it amplifies
        difficulty.
      </p>
      <p>
        When switching time becomes too short, performance breaks down
        regardless of repetition.
      </p>
      <div className="chart-card">
        <h3 className="chart-title">
          How speed affects accuracy at different difficulty levels
        </h3>
        <div className="chart-container">
          <img
            className="chart-image"
            src="/figures/clean_ratio_vs_bpm_by_mode.png"
            alt="Chart of clean ratio versus BPM by mode"
            loading="lazy"
          />
        </div>
      </div>
      <div className="chart-card">
        <h3 className="chart-title">Highest speed I could maintain accuracy</h3>
        <div className="chart-container">
          <img
            className="chart-image"
            src="/figures/max_bpm_clean_ratio_ge_075.png"
            alt="Threshold chart of maximum BPM meeting clean ratio at least 0.75 by session and mode"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}
