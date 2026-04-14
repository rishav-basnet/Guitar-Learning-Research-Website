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
          Over the week, my performance gradually improved across sessions. Early
          sessions were inconsistent, with frequent mistakes and missed transitions.
        </p>
        <p>
          As I repeated the same routine, cleaner transitions started to happen more
          often. However, progress wasn’t perfectly smooth — some days were
          better than others. Overall, there was a clear upward trend in
          performance.
        </p>
        <p>
          To make this visible beyond just feeling it, I looked at the data across
          sessions:
        </p>
        <div className="chart-card">
          <div className="chart-placeholder">Session Trend Chart</div>
          <p className="chart-caption">Performance trend across sessions</p>
        </div>
      </div>
    </Section>
  )
}
