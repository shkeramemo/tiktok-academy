import { Link } from 'react-router-dom'

type LanguageButtonProps = {
  to: '/en' | '/ar'
  label: string
  icon: string
  language: 'english' | 'arabic'
}

export default function LanguageButton({ to, label, icon, language }: LanguageButtonProps) {
  const preloadPage = () => {
    if (to === '/en') void import('../pages/EnglishPage')
    else void import('../pages/ArabicPage')
  }

  return (
    <Link className={`language-button language-button--${language}`} to={to} lang={language === 'arabic' ? 'ar' : 'en'} onMouseEnter={preloadPage} onFocus={preloadPage}>
      <img className="language-button__icon" src={icon} alt="" aria-hidden="true" />
      <span className="language-button__label" dir={language === 'arabic' ? 'rtl' : 'ltr'}>{label}</span>
    </Link>
  )
}
