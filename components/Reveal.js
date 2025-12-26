import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * Lightweight reveal-on-scroll wrapper (no external animation libs).
 * - Respects prefers-reduced-motion (CSS disables motion).
 * - Uses IntersectionObserver for performance.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const style = useMemo(() => {
    return delay ? { transitionDelay: `${delay}ms` } : undefined
  }, [delay])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
            break
          }
        }
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}


