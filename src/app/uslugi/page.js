
import ServicesHeader from '@/components/ServicesHeader'
import ServicesList from '@/components/ServicesList'
import VideoCTA from '@/components/CTAContact'
import ServicesFooter from '@/components/ServicesFooter'
import ServicesAnimationsInit from '@/components/ServicesAnimationsInit'
import { getAllServices } from '@/sanity/queries/services'
import Navbar from '@/components/Navbar'

export default async function Uslugi() {
  const services = await getAllServices()

  return (
    <>
      <ServicesAnimationsInit />
      <Navbar />
      <ServicesHeader />
      <ServicesList services={services} />
      <VideoCTA />
      <ServicesFooter />
    </>
  )
}
