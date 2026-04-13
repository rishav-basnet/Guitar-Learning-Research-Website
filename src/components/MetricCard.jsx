export default function MetricCard({ label, value }) {
  return (
    <div className="metric-card">
      <p className="metric-card__value">{value}</p>
      <p className="metric-card__label">{label}</p>
    </div>
  )
}
