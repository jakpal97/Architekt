
import AboutHeader from '@/components/AboutHeader'
import AboutStory from '@/components/AboutStory'
import AboutNumbers from '@/components/AboutNumbers'
import AboutValues from '@/components/AboutValues'
import CTAContact from '@/components/CTAContact'
import ServicesFooter from '@/components/ServicesFooter'
import AboutAnimationsInit from '@/components/AboutAnimationsInit'
import { getAboutPage } from '@/sanity/queries/about'
import Navbar from '@/components/Navbar'

export default async function ONas() {
  const about = await getAboutPage()

  return (
    <>
      <AboutAnimationsInit />
      <Navbar />
      <AboutHeader title={about?.headerTitle} />
      <AboutStory story={about?.story} />
      <AboutNumbers stats={about?.stats} />
      <AboutValues values={about?.values} />
      <CTAContact />
      <ServicesFooter />
    </>
  )
}
