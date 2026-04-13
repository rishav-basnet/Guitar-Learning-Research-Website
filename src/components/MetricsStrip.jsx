import Container from './Container'
import MetricCard from './MetricCard'

export default function MetricsStrip() {
  return (
    <div className="metrics-strip">
      <Container>
        <div className="metrics-strip__grid" role="list">
          <div role="listitem">
            <MetricCard label="Avg Clean Ratio" value="0.71" />
          </div>
          <div role="listitem">
            <MetricCard label="Best BPM" value="110" />
          </div>
          <div role="listitem">
            <MetricCard label="Total Sessions" value="12" />
          </div>
        </div>
      </Container>
    </div>
  )
}
