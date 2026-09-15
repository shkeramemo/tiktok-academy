import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'
import { useContentMotion } from '../hooks/useContentMotion'

export default function ArabicPage() {
  const pageRef = useContentMotion()
  return <main ref={pageRef} className="content-page" lang="ar" dir="rtl"><SectionOne language="ar" /><SectionTwo language="ar" /><SectionThree language="ar" /><SectionFour language="ar" /><SectionFive language="ar" /></main>
}
