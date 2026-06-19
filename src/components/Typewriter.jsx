import { useEffect, useState } from 'react'

export default function Typewriter({ words, speed = 80, pause = 2000 }) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplay(current.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        } else {
          setTimeout(() => setDeleting(true), pause)
        }
      } else if (charIndex > 0) {
        setDisplay(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      } else {
        setDeleting(false)
        setWordIndex((w) => (w + 1) % words.length)
      }
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, pause, speed, wordIndex, words])

  return (
    <span className="typewriter">
      {display}
      <span className="typewriter-cursor">|</span>
    </span>
  )
}
