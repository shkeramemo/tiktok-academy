import { useState } from 'react'
import { sectionFiveContent } from '../data/section5'

type AgeGroup = 'young' | 'middle' | 'adult'

const ageGroups: { key: AgeGroup; label: string }[] = [
  { key: 'young', label: '13-15' },
  { key: 'middle', label: '16-17' },
  { key: 'adult', label: '18+' },
]

export default function SectionFive({ language }: { language: 'en' | 'ar' }) {
  const content = sectionFiveContent[language]
  const [activeAge, setActiveAge] = useState<AgeGroup>('young')
  const activeAgeLabel = ageGroups.find(group => group.key === activeAge)!.label

  return (
    <section className={`protection-sheet protection-sheet--${language}`} lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} aria-labelledby={`protection-title-${language}`}>
      <header className="protection-sheet__header">
        <img src="/assets/section5/icon 5.1.svg" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <h2 id={`protection-title-${language}`}>{content.titleLines.map(line => <span key={line}>{line}</span>)}</h2>
      </header>
      <p className="protection-sheet__introduction">{content.introduction}</p>
      <div className="protection-sheet__table-scroll" tabIndex={0} role="region" aria-label={language === 'ar' ? 'جدول إعدادات الأمان والخصوصية حسب العمر' : 'Safety and privacy settings by age'}>
      <table className="protection-sheet__table">
        <colgroup><col /><col /><col /><col /></colgroup>
        <thead>
          <tr>
            <th scope="col" aria-label={language === 'ar' ? 'إعداد الأمان والخصوصية' : 'Safety and privacy setting'} />
            <th scope="col" className="protection-sheet__age protection-sheet__age--young"><span dir="ltr">13-15</span></th>
            <th scope="col" className="protection-sheet__age protection-sheet__age--middle"><span dir="ltr">16-17</span></th>
            <th scope="col" className="protection-sheet__age protection-sheet__age--adult"><span dir="ltr">18+</span></th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, index) => (
            <tr key={row.label} className={index === content.rows.length - 1 ? 'protection-sheet__last-row' : undefined}>
              <th scope="row">{row.label}</th>
              <td className="protection-sheet__value protection-sheet__value--young">{row.ages13to15}</td>
              <td className="protection-sheet__value protection-sheet__value--middle">{row.ages16to17}</td>
              <td className="protection-sheet__value protection-sheet__value--adult">{row.ages18plus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="protection-sheet__mobile-ages" role="group" aria-label={language === 'ar' ? 'اختر الفئة العمرية' : 'Choose an age group'}>
        {ageGroups.map(group => (
          <button key={group.key} type="button" className={`protection-sheet__mobile-age protection-sheet__mobile-age--${group.key}`} aria-pressed={activeAge === group.key} onClick={() => setActiveAge(group.key)}>
            <span dir="ltr">{group.label}</span>
          </button>
        ))}
      </div>
      <table className="protection-sheet__table protection-sheet__mobile-table">
        <colgroup><col /><col /></colgroup>
        <thead>
          <tr>
            <th scope="col" aria-label={language === 'ar' ? 'إعداد الأمان والخصوصية' : 'Safety and privacy setting'} />
            <th scope="col" className={`protection-sheet__age protection-sheet__age--${activeAge}`}><span dir="ltr">{activeAgeLabel}</span></th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, index) => (
            <tr key={row.label} className={index === content.rows.length - 1 ? 'protection-sheet__last-row' : undefined}>
              <th scope="row">{row.label}</th>
              <td className={`protection-sheet__value protection-sheet__value--${activeAge}`}>{activeAge === 'young' ? row.ages13to15 : activeAge === 'middle' ? row.ages16to17 : row.ages18plus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="protection-sheet__footer">
        <img src="/assets/landing/tiktok-logo-full.svg" alt="TikTok" loading="lazy" decoding="async" />
        <time dateTime="2026-06" lang="en" dir="ltr">June 2026</time>
      </footer>
    </section>
  )
}
