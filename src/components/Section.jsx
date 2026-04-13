import { useInView } from '../hooks/useInView'

export default function Section({
  id,
  title,
  children,
  className = '',
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
      <header className="section__head">
        <h2 className="section__title" id={`${id}-heading`}>
          {title}
        </h2>
      </header>
      {children != null && children !== false && (
        <div className="section__body">{children}</div>
      )}
    </section>
  )
}
