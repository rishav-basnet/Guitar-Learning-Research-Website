import ChartContainer from './ChartContainer'
import KeywordBadge from './KeywordBadge'
import Section from './Section'

export default function Analysis() {
  return (
    <Section id="analysis" title="Analysis" className="section--analysis">
      <p className="analysis-intro">
        Each row represents one block: a single (session, mode, BPM)
        combination. <KeywordBadge>successful_trials</KeywordBadge> is the
        number of clean transitions (0–4). <KeywordBadge>clean_ratio</KeywordBadge>{' '}
        is <KeywordBadge>successful_trials</KeywordBadge> / 4. The dataset is
        fully structured with no missing conditions.
      </p>
      <div className="analysis-charts">
        <ChartContainer
          title="Session trend"
          caption={
            <>
              Average <KeywordBadge>clean_ratio</KeywordBadge> across all
              conditions per session — learning progression over sessions.
            </>
          }
          takeaway="↑ Overall performance improves across sessions with local dips."
        >
          <img
            src="/images/learning.png"
            alt="Average clean ratio by session"
            width={720}
            height={320}
            loading="lazy"
          />
        </ChartContainer>
        <ChartContainer
          title="BPM vs performance"
          caption="How tempo and difficulty (mode) affect performance."
          takeaway="Higher BPM and harder modes both reduce clean_ratio."
        >
          <img
            src="/images/bpm.png"
            alt="BPM versus performance by mode"
            width={720}
            height={320}
            loading="lazy"
          />
        </ChartContainer>
        <ChartContainer
          title="Threshold (≥ 0.75)"
          caption={
            <>
              Highest BPM where performance remains mostly clean: max BPM where{' '}
              <KeywordBadge>clean_ratio</KeywordBadge> ≥ 0.75.
            </>
          }
          takeaway="Threshold shifts as easier modes tolerate higher BPM."
        >
          <img
            src="/images/threshold.png"
            alt="Maximum BPM at clean ratio at least 0.75"
            width={720}
            height={320}
            loading="lazy"
          />
        </ChartContainer>
      </div>
    </Section>
  )
}
