import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'
import { useContentMotion } from '../hooks/useContentMotion'

export default function EnglishPage() {
  const pageRef = useContentMotion()
  return <main ref={pageRef} className="content-page" lang="en"><SectionOne language="en" /><SectionTwo language="en" /><SectionThree language="en" /><SectionFour language="en" /><SectionFive language="en" /></main>
}
