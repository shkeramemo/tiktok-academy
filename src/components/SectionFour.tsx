import { sectionFourContent, type PairingControl } from '../data/section4'

function Control({ control, index }: { control: PairingControl; index: number }) {
  return (
    <li className={`pairing-control pairing-control--${index + 1}`}>
      <div className="pairing-control__heading">
        <img src={control.icon} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <h3>{control.titleLines ? control.titleLines.map(line => <span key={line}>{line}</span>) : control.title}</h3>
      </div>
      <p>{control.description}</p>
    </li>
  )
}

export default function SectionFour({ language }: { language: 'en' | 'ar' }) {
  const content = sectionFourContent[language]

  return (
    <section className={`pairing-sheet pairing-sheet--${language}`} lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} aria-labelledby={`pairing-title-${language}`}>
      <header className="pairing-sheet__hero">
        <img className="pairing-sheet__hero-art" src="/assets/section4/header.svg" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="pairing-sheet__hero-copy">
          <h2 id={`pairing-title-${language}`}>{content.titleLines.map(line => <span key={line}>{line}</span>)}</h2>
          <p>{content.introduction}</p>
        </div>
      </header>
      <ol className="pairing-sheet__controls">{content.controls.map((control, index) => <Control key={control.title} control={control} index={index} />)}</ol>
      <footer className="pairing-sheet__footer">
        <div className="pairing-sheet__guide">
          <p>{content.guideNote}</p>
          <img src={`/assets/section4/qr-${language}.png`} alt={language === 'ar' ? 'رمز QR لدليل أولياء الأمور' : "QR code for the Guardian's Guide"} loading="lazy" decoding="async" />
        </div>
        <img className="pairing-sheet__brand" src="/assets/landing/tiktok-logo-full.svg" alt="TikTok" loading="lazy" decoding="async" />
        <time dateTime="2026-06" lang="en" dir="ltr">June 2026</time>
      </footer>
    </section>
  )
}
