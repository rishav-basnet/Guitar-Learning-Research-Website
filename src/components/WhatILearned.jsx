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
          <strong>Improvement appeared first</strong> at lower speeds before
          transferring to <span className="highlight">higher BPM levels</span>.
        </InsightCard>
        <InsightCard>
          <strong>Performance was inconsistent early on</strong>, even with
          repetition, showing that familiarity alone does not guarantee
          <span className="highlight"> accuracy</span>.
        </InsightCard>
        <InsightCard>
          <strong>Higher difficulty exposed</strong> timing and coordination
          errors that were not noticeable at
          <span className="highlight"> easier levels</span>.
        </InsightCard>
        <InsightCard>
          <strong>Tracking performance numerically</strong> made progress
          visible and reduced reliance on
          <span className="highlight"> subjective judgment</span>.
        </InsightCard>
      </div>
    </Section>
  )
}
