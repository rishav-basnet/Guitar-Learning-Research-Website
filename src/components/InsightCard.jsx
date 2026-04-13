import Card from './Card'

export default function InsightCard({ title, children }) {
  return (
    <Card interactive className="insight-card">
      {title ? <h3 className="insight-card__title">{title}</h3> : null}
      <p className="insight-card__text">{children}</p>
    </Card>
  )
}
