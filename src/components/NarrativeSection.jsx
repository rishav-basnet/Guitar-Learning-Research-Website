import { useInView } from '../hooks/useInView'

export default function NarrativeSection({
  id,
  label,
  titleBefore,
  titleAccent,
  titleAfter = '',
  className = '',
  children,
  reveal = true,
}) {
  const [ref, visible] = useInView(reveal)
  const revealClass =
    reveal && `section--reveal${visible ? ' is-visible' : ''}`.trim()

  return (
    <section
      ref={ref}
      className={['section', className, revealClass].filter(Boolean).join(' ')}
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <div className="page-container">
        <div className="card">
          <div className="section-content">
            <p className="section-label">{label}</p>
            <h2 className="section-title" id={`${id}-heading`}>
              {titleBefore}
              {titleAccent ? <span className="highlight">{titleAccent}</span> : null}
              {titleAfter}
            </h2>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
