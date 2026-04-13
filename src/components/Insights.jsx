import InsightCard from './InsightCard'
import Section from './Section'

export default function Insights() {
  return (
    <Section id="insights" title="Key insights" className="section--insights">
      <div className="insights-grid">
        <InsightCard>
          Performance shows an overall upward trend across sessions.
        </InsightCard>
        <InsightCard>
          Learning is not linear, with plateaus and short regressions.
        </InsightCard>
        <InsightCard>
          Higher BPM generally reduces performance, especially in harder modes.
        </InsightCard>
        <InsightCard>
          Modes 3–4 consistently perform worse than modes 1–2.
        </InsightCard>
        <InsightCard>
          Performance varies noticeably across sessions, even under the same
          conditions.
        </InsightCard>
      </div>
    </Section>
  )
}
