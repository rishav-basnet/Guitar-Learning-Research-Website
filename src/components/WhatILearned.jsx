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
      className="section--insights card-section"
    >
      <div className="card">
        <div className="insights-grid">
          <InsightCard>
            Performance improves clearly when practice is consistent.
          </InsightCard>
          <InsightCard>
            Learning is not linear — it includes dips, plateaus, and sudden
            improvements.
          </InsightCard>
          <InsightCard>
            Higher speeds reduce accuracy quickly, especially under pressure.
          </InsightCard>
          <InsightCard>
            Harder levels expose timing weaknesses, and some session/mode pairs
            never meet the 0.75 clean threshold.
          </InsightCard>
          <InsightCard className="full">
            Measuring performance makes progress easier to understand and trust.
          </InsightCard>
        </div>
      </div>
    </Section>
  )
}
