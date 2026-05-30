import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

const STORAGE_KEY = 'phan-legacy-hero-start'
const CYCLE = 80_000

function getZoomScale(elapsed) {
  const phase = elapsed % CYCLE
  if (phase <= 20_000) {
    return 1 + 0.10 * (phase / 20_000)
  }
  if (phase <= 40_000) {
    return 1.10 - 0.02 * ((phase - 20_000) / 20_000)
  }
  if (phase <= 60_000) {
    return 1.08 + 0.02 * ((phase - 40_000) / 20_000)
  }
  return 1.10 - 0.02 * ((phase - 60_000) / 20_000)
}

export function usePersistentHeroZoom() {
  const scaleMotionValue = useMotionValue(1)

  useEffect(() => {
    const now = Date.now()
    const saved = localStorage.getItem(STORAGE_KEY)
    const startTimestamp = saved ? Number(saved) : now

    if (!saved) {
      localStorage.setItem(STORAGE_KEY, String(now))
    }

    let frame = 0

    const update = () => {
      const elapsed = Date.now() - startTimestamp
      scaleMotionValue.set(getZoomScale(elapsed))
      frame = requestAnimationFrame(update)
    }

    frame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frame)
  }, [scaleMotionValue])

  return scaleMotionValue
}
