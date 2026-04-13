export default function ChartContainer({ title, caption, children }) {
  return (
    <figure className="chart">
      <div className="chart__header">
        <h3 className="chart__title">{title}</h3>
        {caption ? <p className="chart__caption">{caption}</p> : null}
      </div>
      <div className="chart__frame">{children}</div>
    </figure>
  )
}
