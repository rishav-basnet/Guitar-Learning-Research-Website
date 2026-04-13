export default function Card({ children, className = '', variant }) {
  const variantClass = variant ? `card--${variant}` : ''
  return (
    <div
      className={['card', variantClass, className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}
