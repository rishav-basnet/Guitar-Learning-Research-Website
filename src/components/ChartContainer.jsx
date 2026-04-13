import Card from './Card'

export default function ChartContainer({ title, caption, takeaway, children }) {
  const hasMedia = children != null && children !== false

  return (
    <Card interactive className="chart-card">
      <div className="chart-card__head">
        <h3 className="chart-card__title">{title}</h3>
        {caption ? <p className="chart-card__caption">{caption}</p> : null}
      </div>
      <div
        className={[
          'chart-container',
          hasMedia ? 'chart-container--has-media' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {hasMedia ? (
          children
        ) : (
          <div className="chart-container__empty" role="status">
            <span className="chart-container__empty-label">
              Data visualization
            </span>
            <span className="chart-container__empty-hint">
              Chart preview loads from exported figures
            </span>
          </div>
        )}
      </div>
      {takeaway ? <p className="chart-card__takeaway">{takeaway}</p> : null}
    </Card>
  )
}
