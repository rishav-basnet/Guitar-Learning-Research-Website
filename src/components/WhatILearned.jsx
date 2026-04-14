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
            Improvement appears first in easier conditions before transferring to
            harder ones.
          </InsightCard>
          <InsightCard>
            Progress is not linear - dips and plateaus are normal.
          </InsightCard>
          <InsightCard>
            Speed alone is not the problem - limited switching time is.
          </InsightCard>
          <InsightCard>
            Higher difficulty reveals coordination issues not visible at lower
            levels.
          </InsightCard>
          <InsightCard className="full">
            Measuring performance makes progress visible and trustworthy.
          </InsightCard>
        </div>
      </div>
    </Section>
  )
}
