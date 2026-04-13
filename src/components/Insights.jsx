import Card from './Card'
import Section from './Section'

export default function Insights() {
  return (
    <Section id="insights" title="Key insights" className="section--insights">
      <Card variant="accent">
        <ul className="insights-list">
          <li>Performance shows an overall upward trend across sessions.</li>
          <li>
            Learning is not linear, with plateaus and short regressions.
          </li>
          <li>
            Higher BPM generally reduces performance, especially in harder
            modes.
          </li>
          <li>Modes 3–4 consistently perform worse than modes 1–2.</li>
          <li>
            Performance varies noticeably across sessions, even under the same
            conditions.
          </li>
        </ul>
      </Card>
    </Section>
  )
}
