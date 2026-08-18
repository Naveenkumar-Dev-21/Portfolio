'use client'

import { useState, useEffect, useCallback } from 'react'

const roles = [
  'Penetration Tester',
  'Security Researcher',
  'Vulnerability Researcher',
  'Security Engineer',
]

const TYPING_SPEED = 80
const DELETING_SPEED = 40
const PAUSE_BEFORE_DELETE = 1500
const PAUSE_BEFORE_NEXT = 800

export function Typewriter() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentRole = roles[currentRoleIndex]

  const tick = useCallback(() => {
    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
        setTimeout(tick, TYPING_SPEED)
      } else {
        setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETE)
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1))
        setTimeout(tick, DELETING_SPEED)
      } else {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setTimeout(tick, PAUSE_BEFORE_NEXT)
      }
    }
  }, [currentRole, displayText, isDeleting])

  useEffect(() => {
    const timeout = setTimeout(tick, PAUSE_BEFORE_NEXT)
    return () => clearTimeout(timeout)
  }, [tick])

  return <span className="text-text-primary font-medium">{displayText}</span>
}