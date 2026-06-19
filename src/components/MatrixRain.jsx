import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    let animationId
    let columns = []
    let fontSize = 14

    const chars = 'アイウエオカキクケコ0123456789ABCDEF<>{}[]/\\|@#$%&*'

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      fontSize = window.innerWidth < 768 ? 12 : 14
      columns = Array(Math.floor(canvas.width / fontSize)).fill(0)
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(34, 211, 238, 0.35)'
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`

      for (let i = 0; i < columns.length; i += 1) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = columns[i] * fontSize

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          columns[i] = 0
        } else {
          columns[i] += 1
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />
}
