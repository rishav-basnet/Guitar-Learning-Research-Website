import Card from './Card'
import ChartContainer from './ChartContainer'
import Section from './Section'

export default function Analysis() {
  return (
    <Section id="analysis" title="Analysis" className="section--analysis">
      <Card>
        <p className="analysis-intro">
          Each row represents one block: a single (session, mode, BPM)
          combination. <span className="term">successful_trials</span> is the
          number of clean transitions (0–4).{' '}
          <span className="term">clean_ratio</span> is{' '}
          <span className="term">successful_trials</span> / 4. The dataset is
          fully structured with no missing conditions.
        </p>
        <div className="analysis-charts">
          <ChartContainer
            title="Session trend"
            caption={
              <>
                Average <span className="term">clean_ratio</span> across all
                conditions per session — learning progression over sessions.
              </>
            }
          >
            <img
              src="/images/learning.png"
              alt="Placeholder chart: average clean_ratio by session"
              width={720}
              height={320}
              loading="lazy"
            />
          </ChartContainer>
          <ChartContainer
            title="BPM vs performance"
            caption="How tempo and difficulty (mode) affect performance."
          >
            <img
              src="/images/bpm.png"
              alt="Placeholder chart: BPM versus performance by mode"
              width={720}
              height={320}
              loading="lazy"
            />
          </ChartContainer>
          <ChartContainer
            title="Threshold (≥ 0.75)"
            caption={
              <>
                Highest BPM where performance remains mostly clean: max BPM
                where <span className="term">clean_ratio</span> ≥ 0.75.
              </>
            }
          >
            <img
              src="/images/threshold.png"
              alt="Placeholder chart: max BPM at clean_ratio ≥ 0.75"
              width={720}
              height={320}
              loading="lazy"
            />
          </ChartContainer>
        </div>
      </Card>
    </Section>
  )
}
