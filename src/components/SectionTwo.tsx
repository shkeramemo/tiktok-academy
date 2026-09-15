import { sectionTwoContent, type SectionTwoCard } from '../data/section2'

const transparencyUrl = 'https://www.tiktok.com/safety/en-GB/policies-and-engagement/combating-csea'

function SafetyCard({ card, index }: { card: SectionTwoCard; index: number }) {
  return (
    <li className={`safety-card safety-card--${index + 1}`}>
      <div className="safety-card__heading">
        <img src={card.icon} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <h3>{card.title}</h3>
      </div>
      <div className="safety-card__copy">
        <p>{card.paragraphs[0]}</p>
        {card.bullets && <ul>{card.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
        {card.paragraphs.slice(1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </li>
  )
}

export default function SectionTwo({ language }: { language: 'en' | 'ar' }) {
  const content = sectionTwoContent[language]

  return (
    <section className={`safety-sheet safety-sheet--${language}`} lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} aria-labelledby={`safety-title-${language}`}>
      <header className="safety-sheet__header">
        <h2 id={`safety-title-${language}`}>{content.titleLines.map(line => <span key={line}>{line}</span>)}</h2>
        <div className="safety-sheet__introduction">
          {content.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </header>
      <ol className="safety-sheet__cards">
        {content.cards.map((card, index) => <SafetyCard key={card.title} card={card} index={index} />)}
      </ol>
      <footer className="safety-sheet__footer">
        <a className="safety-sheet__transparency" href={transparencyUrl} target="_blank" rel="noopener noreferrer" aria-label={language === 'ar' ? 'اقرأ المزيد في مركز الشفافية' : 'Learn more in our Transparency Centre'}>
          <span lang="en" dir="ltr">Learn more in our<br />Transparency Centre</span>
          <img src={`/assets/section2/qr-${language}.${language === 'en' ? 'jpeg' : 'png'}`} alt={language === 'ar' ? 'رمز QR لمركز الشفافية' : 'QR code for the Transparency Centre'} loading="lazy" decoding="async" />
        </a>
        <img className="safety-sheet__brand" src="/assets/landing/tiktok-logo-full.svg" alt="TikTok" loading="lazy" decoding="async" />
        <time className="safety-sheet__date" dateTime="2026-06" lang="en" dir="ltr">June 2026</time>
      </footer>
    </section>
  )
}
