import InsightCard from './InsightCard'
import Section from './Section'

export default function WhatILearned() {
  return (
    <Section
      id="what-i-learned"
      title={
        <>
          What I <span className="highlight">learned</span>
        </>
      }
      className="section--insights card-section what-i-learned"
    >
      <div className="insights-grid card-grid">
        <InsightCard>
          Improvement did not happen uniformly — it stabilized at lower speeds
          first, then gradually extended to higher BPMs.
        </InsightCard>
        <InsightCard>
          Performance remained inconsistent early on, showing that repetition
          alone does not guarantee accuracy without control.
        </InsightCard>
        <InsightCard>
          Higher difficulty revealed timing and coordination errors that were
          not visible under easier conditions.
        </InsightCard>
        <InsightCard>
          Quantifying performance removed guesswork and made progress
          objectively visible over time.
        </InsightCard>
      </div>
    </Section>
  )
}
