import Section from './Section'

export default function Outcome() {
  return (
    <Section
      id="outcome"
      className="card-section"
      title={
        <>
          So, did I actually <span className="highlight">improve</span>?
        </>
      }
    >
      <div className="card">
        <p>
          Over the week, my average clean performance rose from about 0.26 in the
          first session to around 0.57 by the final session.
        </p>
        <p>
          Early sessions were inconsistent, but cleaner transitions became more
          common as the routine stayed the same day to day. The curve still has
          small dips, so progress is visible but not perfectly smooth.
        </p>
        <p>
          To make this visible beyond just feeling it, I used the session trend
          chart from the updated analysis:
        </p>
        <div className="chart-card">
          <img
            className="chart-image"
            src="/figures/learning_progression_clean_ratio.png"
            alt="Learning progression chart showing average clean ratio by session"
            loading="lazy"
          />
          <p className="chart-caption">Performance trend across sessions</p>
        </div>
      </div>
    </Section>
  )
}
