import InsightCard from './InsightCard'
import Section from './Section'

export default function WhatILearned() {
  return (
    <Section
      id="what-i-learned"
      title="What I learned"
      className="section--insights"
    >
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
          Difficulty helps reveal weaknesses that are not visible at easier
          levels.
        </InsightCard>
        <InsightCard>
          Measuring performance makes progress easier to understand and trust.
        </InsightCard>
      </div>
    </Section>
  )
}
