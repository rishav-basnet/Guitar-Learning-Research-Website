import { useEffect, useRef, useState } from 'react'

/**
 * When `enabled`, sets `true` once the element intersects the viewport (one-shot).
 * When disabled, starts as `true` (no animation gate).
 */
export function useInView(enabled = true) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(!enabled)

  useEffect(() => {
    if (!enabled || isVisible) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [enabled, isVisible])

  return [ref, isVisible]
}
