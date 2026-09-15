import { sectionOneContent, type FactCardContent } from '../data/section1'

function FactCard({ card, language }: { card: FactCardContent; language: 'en' | 'ar' }) {
  return (
    <li className={`fact-card fact-card--${card.number}${card.icon ? ' fact-card--illustrated' : ''}${card.titleLines ? ' fact-card--multiline' : ''}`}>
      <div className="fact-card__heading">
        <span className="fact-card__number" dir="ltr">{card.number}</span>
        <h2>{card.titleLines ? <><span>{card.titleLines[0]}</span>{' '}<span>{card.titleLines[1]}</span></> : card.title}</h2>
      </div>
      <p>{card.description}</p>
      {card.icon && <img className="fact-card__icon" src={card.icon} alt="" aria-hidden="true" lang={language} loading="lazy" decoding="async" />}
    </li>
  )
}

export default function SectionOne({ language }: { language: 'en' | 'ar' }) {
  const content = sectionOneContent[language]

  return (
    <section className={`fact-sheet fact-sheet--${language}`} lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} aria-label={language === 'ar' ? 'القسم الأول' : 'Section 1'}>
      <header className="fact-sheet__header">
        <h1>{language === 'ar' && <><span className="fact-sheet__title-number" dir="ltr">10</span>{' '}</>}{content.title}</h1>
        <div className="fact-sheet__brand">
          <img src="/assets/landing/tiktok-logo-full.svg" alt="TikTok" />
          <time dateTime="2026-06" lang="en" dir="ltr">June 2026</time>
        </div>
      </header>
      <p className="fact-sheet__introduction">{content.introduction}</p>
      <ol className="fact-sheet__cards">
        {content.cards.map(card => <FactCard key={card.number} card={card} language={language} />)}
      </ol>
    </section>
  )
}
