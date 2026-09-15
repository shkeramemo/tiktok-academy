import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

const EnglishPage = lazy(() => import('./pages/EnglishPage'))
const ArabicPage = lazy(() => import('./pages/ArabicPage'))

function PageLoading({ language }: { language: 'en' | 'ar' }) {
  return (
    <main className="route-loading" lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} role="status">
      <img src="/assets/landing/tiktok-logo-full.svg" alt="TikTok" />
      <span>{language === 'ar' ? 'جاري التحميل…' : 'Loading…'}</span>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/en" element={<Suspense fallback={<PageLoading language="en" />}><EnglishPage /></Suspense>} />
      <Route path="/ar" element={<Suspense fallback={<PageLoading language="ar" />}><ArabicPage /></Suspense>} />
    </Routes>
  )
}
