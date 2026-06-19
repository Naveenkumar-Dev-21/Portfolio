import { useEffect, useState } from 'react'

export default function useScrollSpy(sectionIds, offset = 120) {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const onScroll = () => {
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id
        }
      }

      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds, offset])

  return active
}
