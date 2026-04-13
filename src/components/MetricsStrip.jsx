import Container from './Container'
import MetricCard from './MetricCard'

export default function MetricsStrip() {
  return (
    <div className="metrics-strip">
      <Container>
        <div className="metrics-strip__grid" role="list">
          <div role="listitem">
            <MetricCard
              label="Avg clean ratio"
              value="0.71"
              hint="Across all recorded blocks"
            />
          </div>
          <div role="listitem">
            <MetricCard
              label="Best BPM achieved"
              value="110"
              hint="At ≥0.75 clean_ratio threshold"
            />
          </div>
          <div role="listitem">
            <MetricCard label="Total sessions" value="12" hint="Same protocol" />
          </div>
          <div role="listitem">
            <MetricCard
              label="Consistency score"
              value="72%"
              hint="Session-to-session stability"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
