import { useInView } from '../hooks/useInView'

export default function NarrativeSection({
  id,
  label,
  titleBefore,
  titleAccent,
  titleAfter = '',
  children,
  reveal = true,
}) {
  const [ref, visible] = useInView(reveal)
  const revealClass =
    reveal && `section--reveal${visible ? ' is-visible' : ''}`.trim()

  return (
    <section
      ref={ref}
      className={['section', revealClass].filter(Boolean).join(' ')}
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container">
        <div className="section-card">
          <p className="section-label">{label}</p>
          <h2 className="section-title" id={`${id}-heading`}>
            {titleBefore}
            <span>{titleAccent}</span>
            {titleAfter}
          </h2>
          <div className="section-content">{children}</div>
        </div>
      </div>
    </section>
  )
}
