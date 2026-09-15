import { sectionThreeContent, type WellbeingCardContent } from '../data/section3'

function WellbeingCard({ card, index }: { card: WellbeingCardContent; index: number }) {
  return (
    <li className={`wellbeing-card wellbeing-card--${index + 1}`}>
      <div className="wellbeing-card__heading">
        <img src={card.icon} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <h3>{card.title}</h3>
      </div>
      <div className="wellbeing-card__copy">
        <p>{card.introduction}</p>
        {card.bullets && <ul>{card.bullets.map(bullet => <li key={bullet.text}>{bullet.label && <strong>{bullet.label}</strong>}{bullet.label && ': '}{bullet.text}</li>)}</ul>}
        {card.closing && <p>{card.closing}</p>}
      </div>
    </li>
  )
}

export default function SectionThree({ language }: { language: 'en' | 'ar' }) {
  const content = sectionThreeContent[language]

  return (
    <section className={`wellbeing-sheet wellbeing-sheet--${language}`} lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} aria-labelledby={`wellbeing-title-${language}`}>
      <header className="wellbeing-sheet__header">
        <h2 id={`wellbeing-title-${language}`}>{content.titleLines.map(line => <span key={line}>{line}</span>)}</h2>
        <div className="wellbeing-sheet__introduction">{content.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </header>
      <ol className="wellbeing-sheet__cards">{content.cards.map((card, index) => <WellbeingCard key={card.title} card={card} index={index} />)}</ol>
      <footer className="wellbeing-sheet__footer">
        <img src="/assets/landing/tiktok-logo-full.svg" alt="TikTok" loading="lazy" decoding="async" />
        <time dateTime="2026-06" lang="en" dir="ltr">June 2026</time>
      </footer>
    </section>
  )
}
