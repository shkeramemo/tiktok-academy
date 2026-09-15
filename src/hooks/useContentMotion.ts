import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const revealTargets = [
  '.fact-sheet__header', '.fact-sheet__introduction', '.fact-card',
  '.safety-sheet__header', '.safety-card', '.safety-sheet__footer',
  '.wellbeing-sheet__header', '.wellbeing-card', '.wellbeing-sheet__footer',
  '.pairing-sheet__hero-copy', '.pairing-control', '.pairing-sheet__footer',
  '.protection-sheet__header', '.protection-sheet__introduction',
  '.protection-sheet__table-scroll', '.protection-sheet__mobile-ages',
  '.protection-sheet__mobile-table', '.protection-sheet__footer',
].join(', ')

export function useContentMotion() {
  const pageRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const page = pageRef.current
    if (!page || !('IntersectionObserver' in window)) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) return

    const targets = Array.from(page.querySelectorAll<HTMLElement>(revealTargets))
      .filter(element => getComputedStyle(element).display !== 'none')

    const context = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: 16 })
    }, page)

    let stopped = false
    const observer = new IntersectionObserver(entries => {
      if (stopped) return
      entries.filter(entry => entry.isIntersecting).forEach((entry, index) => {
        const element = entry.target as HTMLElement
        observer.unobserve(element)
        context.add(() => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.58,
            delay: Math.min(index * 0.065, 0.26),
            ease: 'power2.out',
            clearProps: 'opacity,transform',
          })
        })
      })
    }, { rootMargin: '0px 0px 80px 0px', threshold: 0.04 })

    targets.forEach(element => observer.observe(element))

    const revealAll = () => {
      stopped = true
      observer.disconnect()
      context.revert()
    }
    const onMotionChange = () => {
      if (reducedMotion.matches) revealAll()
    }

    reducedMotion.addEventListener('change', onMotionChange)
    window.addEventListener('beforeprint', revealAll)

    return () => {
      stopped = true
      observer.disconnect()
      reducedMotion.removeEventListener('change', onMotionChange)
      window.removeEventListener('beforeprint', revealAll)
      context.revert()
    }
  }, [])

  return pageRef
}
