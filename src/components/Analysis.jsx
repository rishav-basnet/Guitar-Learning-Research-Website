import Section from './Section'

export default function Analysis() {
  return (
    <Section id="analysis" title="Analysis">
      <p>
        Each row represents one block: a single (session, mode, BPM)
        combination. <span className="hero__term">successful_trials</span> is
        the number of clean transitions (0–4).{' '}
        <span className="hero__term">clean_ratio</span> is{' '}
        <span className="hero__term">successful_trials</span> / 4. The dataset
        is fully structured with no missing conditions.
      </p>
      <div className="analysis-blocks">
        <figure className="analysis-figure">
          <h3 className="analysis-block__title">Session trend</h3>
          <p className="analysis-block__text">
            Average <span className="hero__term">clean_ratio</span> across all
            conditions per session — learning progression over sessions.
          </p>
          <div className="analysis-figure__frame">
            <img
              src="/images/learning.png"
              alt="Placeholder chart: average clean_ratio by session"
              width={720}
              height={320}
              loading="lazy"
            />
          </div>
        </figure>
        <figure className="analysis-figure">
          <h3 className="analysis-block__title">BPM vs performance</h3>
          <p className="analysis-block__text">
            How tempo and difficulty (mode) affect performance.
          </p>
          <div className="analysis-figure__frame">
            <img
              src="/images/bpm.png"
              alt="Placeholder chart: BPM versus performance by mode"
              width={720}
              height={320}
              loading="lazy"
            />
          </div>
        </figure>
        <figure className="analysis-figure">
          <h3 className="analysis-block__title">
            Threshold (≥ 0.75)
          </h3>
          <p className="analysis-block__text">
            Highest BPM where performance remains mostly clean: max BPM where{' '}
            <span className="hero__term">clean_ratio</span> ≥ 0.75.
          </p>
          <div className="analysis-figure__frame">
            <img
              src="/images/threshold.png"
              alt="Placeholder chart: max BPM at clean_ratio ≥ 0.75"
              width={720}
              height={320}
              loading="lazy"
            />
          </div>
        </figure>
      </div>
    </Section>
  )
}
