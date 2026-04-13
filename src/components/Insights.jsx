import InsightCard from './InsightCard'
import Section from './Section'

export default function Insights() {
  return (
    <Section id="insights" title="Key insights" className="section--insights">
      <div className="insights-grid">
        <InsightCard title="Overall trajectory">
          Performance shows an overall upward trend across sessions.
        </InsightCard>
        <InsightCard title="Non-linear progress">
          Learning is not linear, with plateaus and short regressions.
        </InsightCard>
        <InsightCard title="Tempo and difficulty">
          Higher BPM generally reduces performance, especially in harder modes.
        </InsightCard>
        <InsightCard title="Mode spread">
          Modes 3–4 consistently perform worse than modes 1–2.
        </InsightCard>
        <InsightCard title="Session variability">
          Performance varies noticeably across sessions, even under the same
          conditions.
        </InsightCard>
      </div>
    </Section>
  )
}
