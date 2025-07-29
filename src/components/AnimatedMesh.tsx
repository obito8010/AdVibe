'use client'

import { animated, useSpring } from '@react-spring/web'
import { useEffect } from 'react'

const isMobile = () =>
  typeof navigator !== 'undefined' &&
  /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)

const AnimatedMesh = () => {
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  useEffect(() => {
    if (isMobile()) {
      // 🎯 On mobile: Auto-motion loop
      let frame: number
      let t = 0
      const animate = () => {
        t += 0.02
        api.start({
          x: Math.sin(t) * 20,
          y: Math.cos(t) * 20,
        })
        frame = requestAnimationFrame(animate)
      }
      animate()
      return () => cancelAnimationFrame(frame)
    } else {
      // 🖱️ On desktop: Mouse motion
      const handleMouseMove = (e: MouseEvent) => {
        const xVal = (e.clientX / window.innerWidth - 0.5) * 40
        const yVal = (e.clientY / window.innerHeight - 0.5) * 40
        api.start({ x: xVal, y: yVal })
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [api])

  return (
    <div className="absolute inset-0 overflow-hidden opacity-40 dark:opacity-20 pointer-events-none">
      <animated.div
        style={{
          transform: x.to((xVal) => `translate(${xVal}px, ${y.get()}px)`),
          background: `
            radial-gradient(
              circle at 40% 40%,
              rgba(99, 102, 241, 0.8) 0%,
              rgba(139, 92, 246, 0.6) 30%,
              rgba(59, 130, 246, 0.4) 60%,
              transparent 80%
            )
          `,
          width: '200vw',
          height: '200vh',
          position: 'absolute',
          top: '-50vh',
          left: '-50vw',
        }}
      />

      <animated.div
        style={{
          transform: x.to((xVal) => `translate(${-xVal}px, ${-y.get()}px)`),
          background: `
            radial-gradient(
              circle at 60% 60%,
              rgba(34, 197, 94, 0.4) 0%,
              rgba(248, 113, 113, 0.3) 30%,
              transparent 60%
            )
          `,
          width: '200vw',
          height: '200vh',
          position: 'absolute',
          top: '-50vh',
          left: '-50vw',
        }}
      />
    </div>
  )
}

export default AnimatedMesh
