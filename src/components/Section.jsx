export default function Section({ id, title, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-heading`}>
      <h2 className="section__title" id={`${id}-heading`}>
        {title}
      </h2>
      {children != null && children !== false && (
        <div className="section__body">{children}</div>
      )}
    </section>
  )
}
