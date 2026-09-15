import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import LanguageButton from '../components/LanguageButton'

const asset = (name: string) => `/assets/landing/${name}`

const decorations = [
  ['decor-blue-square-top', '(3)blue-square.svg'],
  ['decor-red-zigzag-top', '(6)zigzag-red.svg'],
  ['decor-red-square-top', '(3)red-square.svg'],
  ['decor-red-dots-top', '(2)vertical-dots-red.svg'],
  ['decor-gray-square-top', '(3)gray-square.svg'],
  ['decor-gray-dots-left', '(2)vertical-dots-gray.svg'],
  ['decor-blue-circles-right', '(4)circles-blue.svg'],
  ['decor-blue-cross-left', '(5)x-sign-blue.svg'],
  ['decor-blue-dots-buttons', '(2)vertical-dots-blue.svg'],
  ['decor-red-cross-right', '(5)x-sign-red.svg'],
  ['decor-red-circles-bottom', '(4)circles-red.svg'],
  ['decor-gray-square-bottom', '(3)gray-square.svg'],
  ['decor-blue-zigzag-bottom', '(6)zigzag-blue.svg'],
  ['decor-gray-dots-bottom', '(2)vertical-dots-gray.svg'],
] as const

export default function LandingPage() {
  const pageRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const page = pageRef.current
    if (!page) return

    const motion = gsap.matchMedia()
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const logo = page.querySelector('.landing-logo')
      const buttons = page.querySelectorAll('.language-button')
      const ornaments = page.querySelectorAll('.decor-blue-circles-right, .decor-red-cross-right, .decor-blue-cross-left')

      gsap.set([logo, ...buttons], { opacity: 0, y: 14 })
      gsap.timeline({ defaults: { ease: 'power2.out' } })
        .to(logo, { opacity: 1, y: 0, duration: 0.7, clearProps: 'opacity,transform' })
        .to(buttons, { opacity: 1, y: 0, duration: 0.55, stagger: 0.12, clearProps: 'opacity,transform' }, '-=0.28')

      ornaments.forEach((element, index) => {
        gsap.to(element, {
          y: index === 1 ? -6 : 6,
          rotation: index === 1 ? -2 : 2,
          duration: 4.2 + index * 0.7,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      })
    })

    return () => motion.revert()
  }, [])

  return (
    <main ref={pageRef} className="landing-page">
      <div className="landing-canvas">
        <div className="landing-decorations" aria-hidden="true">
          {decorations.map(([className, file]) => (
            <img key={className} className={`landing-decoration ${className}`} src={asset(file)} alt="" loading="lazy" decoding="async" />
          ))}
        </div>

        <div className="landing-content">
          <img className="landing-logo" src={asset('tiktok-logo-full.svg')} alt="TikTok" fetchPriority="high" />
          <nav className="language-selector" aria-label="Choose a language">
            <LanguageButton to="/en" label="English" icon={asset('(1)english-button-appendix.svg')} language="english" />
            <LanguageButton to="/ar" label="عربي" icon={asset('(1)arabic-button-appendix.svg')} language="arabic" />
          </nav>
        </div>
      </div>
    </main>
  )
}
