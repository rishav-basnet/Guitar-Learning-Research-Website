import Section from './Section'

export default function Factors() {
  return (
    <Section
      id="factors"
      className="card-section"
      title={
        <>
          What made it <span className="highlight">harder or easier</span>?
        </>
      }
    >
      <div className="card">
        <p>
          Increasing speed made clean transitions harder, and the drop was
          steeper in harder modes where switching time was shorter.
        </p>
        <p>
          At slower BPM values, control stayed higher and more consistent. As
          time pressure increased, accuracy became less stable.
        </p>
        <p>
          In the threshold view, easier modes keep passing 0.75 at higher BPM,
          while harder modes show visible gaps where no session reaches that
          threshold.
        </p>
        <div className="chart-card">
          <img
            className="chart-image"
            src="/figures/clean_ratio_vs_bpm_by_mode.png"
            alt="Chart of clean ratio versus BPM by mode"
            loading="lazy"
          />
          <p className="chart-caption">Performance vs speed and difficulty</p>
        </div>
        <div className="chart-card">
          <img
            className="chart-image"
            src="/figures/max_bpm_clean_ratio_ge_075.png"
            alt="Threshold chart of maximum BPM meeting clean ratio at least 0.75 by session and mode"
            loading="lazy"
          />
          <p className="chart-caption">
            Max BPM meeting clean ratio ≥ 0.75 (gaps = no qualifying row)
          </p>
        </div>
      </div>
    </Section>
  )
}
