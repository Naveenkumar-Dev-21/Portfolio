import { useEffect, useState } from 'react'
import { bootLines } from '../data/content'

export default function BootLoader({ onComplete }) {
  const [lines, setLines] = useState([])
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let lineIndex = 0
    let progressValue = 0

    const lineTimer = setInterval(() => {
      if (lineIndex < bootLines.length) {
        setLines((prev) => [...prev, bootLines[lineIndex]])
        lineIndex += 1
      } else {
        clearInterval(lineTimer)
      }
    }, 380)

    const progressTimer = setInterval(() => {
      progressValue += 2
      setProgress(Math.min(progressValue, 100))
      if (progressValue >= 100) clearInterval(progressTimer)
    }, 45)

    const exitTimer = setTimeout(() => {
      setExiting(true)
      setTimeout(onComplete, 600)
    }, 2800)

    return () => {
      clearInterval(lineTimer)
      clearInterval(progressTimer)
      clearTimeout(exitTimer)
    }
  }, [onComplete])

  return (
    <div className={`boot-loader${exiting ? ' boot-loader--exit' : ''}`}>
      <div className="boot-loader-inner">
        <div className="boot-header">
          <span className="boot-dot boot-dot--red" />
          <span className="boot-dot boot-dot--amber" />
          <span className="boot-dot boot-dot--green" />
          <span className="boot-title">SECURE_TERMINAL v2.4.1</span>
        </div>
        <div className="boot-body">
          {lines.map((line, i) => (
            <p key={line} className="boot-line" style={{ animationDelay: `${i * 0.05}s` }}>
              {line}
            </p>
          ))}
          <span className="boot-cursor">█</span>
        </div>
        <div className="boot-progress">
          <div className="boot-progress-bar" style={{ width: `${progress}%` }} />
          <span className="boot-progress-label">{progress}%</span>
        </div>
      </div>
    </div>
  )
}
