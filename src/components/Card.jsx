export default function Card({
  children,
  className = '',
  variant,
  interactive = false,
}) {
  const variantClass = variant ? `card--${variant}` : ''
  const interactiveClass = interactive ? 'card--interactive' : ''
  return (
    <div
      className={['card', variantClass, interactiveClass, className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
