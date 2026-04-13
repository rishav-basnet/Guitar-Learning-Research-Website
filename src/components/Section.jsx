export default function Section({ id, title, children, className = '' }) {
  return (
    <section
      className={['section', className].filter(Boolean).join(' ')}
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
