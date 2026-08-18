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

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETE);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, DELETING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, PAUSE_BEFORE_NEXT);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles.length]);

  return <span className="text-text-primary font-medium">{displayText}</span>
}