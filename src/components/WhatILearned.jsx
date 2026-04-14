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
      <div className="insights-grid">
        <InsightCard>
          Improvement appeared first at lower speeds before transferring to
          higher BPM levels.
        </InsightCard>
        <InsightCard>
          Performance was inconsistent early on, even with repetition, showing
          that familiarity alone doesn’t guarantee accuracy.
        </InsightCard>
        <InsightCard>
          Higher difficulty exposed timing and coordination errors that were not
          noticeable at easier levels.
        </InsightCard>
        <InsightCard>
          Tracking performance numerically made progress visible and reduced
          reliance on subjective judgment.
        </InsightCard>
      </div>
    </Section>
  )
}
