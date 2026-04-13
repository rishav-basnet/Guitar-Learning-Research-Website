export default function Button({
  href,
  children,
  className = '',
  external = true,
  ...rest
}) {
  return (
    <a
      className={['btn', 'btn--primary', className].filter(Boolean).join(' ')}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}
