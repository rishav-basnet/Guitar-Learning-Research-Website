import InsightCard from './InsightCard'
import Section from './Section'

export default function Insights() {
  return (
    <Section id="insights" title="Key insights" className="section--insights">
      <div className="insights-grid">
        <InsightCard>
          Performance shows a clear upward trend across sessions.
        </InsightCard>
        <InsightCard>
          Learning is not linear — there are dips, plateaus, and sudden
          improvements.
        </InsightCard>
        <InsightCard>
          Higher speeds make accuracy drop quickly, especially at harder levels.
        </InsightCard>
        <InsightCard>
          Harder difficulty levels expose timing and coordination weaknesses.
        </InsightCard>
      </div>
    </Section>
  )
}
