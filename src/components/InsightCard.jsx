import Card from './Card'

export default function InsightCard({ title, children, className = '' }) {
  return (
    <Card interactive className={['insight-card', className].filter(Boolean).join(' ')}>
      {title ? <h3 className="insight-card__title">{title}</h3> : null}
      <p className="insight-card__text">{children}</p>
    </Card>
  )
}
