'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [isVisible, reducedMotion])

  useEffect(() => {
    if (reducedMotion) return

    const handleHover = (e: Event) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .clickable')
      setIsHovering(!!isInteractive)
    }

    document.addEventListener('mouseover', handleHover, true)
    document.addEventListener('mouseout', handleHover, true)

    return () => {
      document.removeEventListener('mouseover', handleHover, true)
      document.removeEventListener('mouseout', handleHover, true)
    }
  }, [reducedMotion])

  if (reducedMotion || !isVisible) return null

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        a, button, [role="button"], input, textarea, select, .clickable, summary {
          cursor: none !important;
        }
        @media (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
      
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-[50ms] ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
        aria-hidden="true"
      >
        <div
          className={`w-3 h-3 rounded-full border-2 transition-all duration-150 ease-out ${
            isClicking ? 'scale-75' : ''
          } ${isHovering ? 'bg-accent/30 border-accent scale-150' : 'bg-transparent border-text-muted/40'}`}
          style={{
            borderColor: isHovering ? 'rgb(77, 184, 126)' : 'rgb(104, 117, 111)',
            backgroundColor: isHovering ? 'rgba(77, 184, 126, 0.3)' : 'transparent',
          }}
        />
      </div>
      
      {isHovering && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9998] transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          }}
          aria-hidden="true"
        >
          <div className="w-8 h-8 rounded-full border border-accent/30 bg-accent/10" />
        </div>
      )}
    </>
  )
}