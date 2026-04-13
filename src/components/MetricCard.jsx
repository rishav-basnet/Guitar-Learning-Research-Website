export default function MetricCard({ label, value, hint }) {
  return (
    <div className="metric-card">
      <p className="metric-card__value">{value}</p>
      <p className="metric-card__label">{label}</p>
      {hint ? <p className="metric-card__hint">{hint}</p> : null}
    </div>
  )
}
