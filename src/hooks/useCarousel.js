import { useState, useEffect, useRef, useCallback } from 'react'

const AUTOPLAY_MS = 7000

export function useCarousel(count) {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const indexRef = useRef(0)
  const elapsedRef = useRef(0)
  const lastRef = useRef(null)
  const userPausedRef = useRef(false)
  const hoverPausedRef = useRef(false)
  const countRef = useRef(count)
  countRef.current = count

  const goTo = useCallback((i) => {
    const n = ((i % countRef.current) + countRef.current) % countRef.current
    indexRef.current = n
    elapsedRef.current = 0
    lastRef.current = null
    setIndex(n)
    setProgress(0)
  }, [])

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo])
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo])

  const togglePause = useCallback(() => {
    const paused = !userPausedRef.current
    userPausedRef.current = paused
    if (!paused) lastRef.current = null
    setIsPlaying(!paused)
  }, [])

  const onMouseEnter = useCallback(() => { hoverPausedRef.current = true }, [])
  const onMouseLeave = useCallback(() => { hoverPausedRef.current = false }, [])

  useEffect(() => {
    let rafId
    function loop(t) {
      if (lastRef.current === null) lastRef.current = t
      const dt = t - lastRef.current
      lastRef.current = t

      if (!userPausedRef.current && !hoverPausedRef.current) {
        elapsedRef.current += dt
        setProgress(Math.min(elapsedRef.current / AUTOPLAY_MS, 1))
        if (elapsedRef.current >= AUTOPLAY_MS) {
          const n = (indexRef.current + 1) % countRef.current
          indexRef.current = n
          elapsedRef.current = 0
          lastRef.current = null
          setIndex(n)
          setProgress(0)
        }
      }
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [])

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === ' ') { e.preventDefault(); togglePause() }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [next, prev, togglePause])

  return { index, progress, isPlaying, goTo, next, prev, togglePause, onMouseEnter, onMouseLeave }
}
