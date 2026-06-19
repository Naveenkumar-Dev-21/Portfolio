import { useEffect, useRef, useState } from 'react'

export default function CountUp({ end, duration = 1500, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return undefined

    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(end * eased)

      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
    return undefined
  }, [started, end, duration])

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value)

  return (
    <span ref={ref} className="count-up">
      {formatted}{suffix}
    </span>
  )
}
