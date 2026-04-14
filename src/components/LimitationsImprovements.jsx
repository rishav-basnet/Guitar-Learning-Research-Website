import Section from './Section'

export default function LimitationsImprovements() {
  return (
    <Section
      id="limitations-improvements"
      title="Limitations & Improvements"
      className="card-section"
    >
      <div className="text-container">
        <p>This experiment has several limitations:</p>
        <ul className="clean-list">
          <li>Single participant (n = 1), so results are not generalizable</li>
          <li>Short duration (7 sessions), limiting long-term insight</li>
          <li>
            Manual tracking, which may introduce small inconsistencies
          </li>
        </ul>
        <p>If extended, I would improve this by:</p>
        <ul className="clean-list">
          <li>Including multiple participants to compare learning patterns</li>
          <li>Running the experiment over a longer time period</li>
          <li>
            Automating data collection to reduce bias and increase accuracy
          </li>
        </ul>
      </div>
    </Section>
  )
}
