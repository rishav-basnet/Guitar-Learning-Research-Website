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
      className={['container', 'section', className, revealClass]
        .filter(Boolean)
        .join(' ')}
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <h2 className="section-title" id={id ? `${id}-heading` : undefined}>
        {title}
      </h2>
      {children != null && children !== false && (
        <div className="section-content">{children}</div>
      )}
    </section>
  )
}
