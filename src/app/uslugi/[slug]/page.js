import { notFound } from 'next/navigation'

import ServiceDetailHeader from '@/components/ServiceDetailHeader'
import ServiceDetailHero from '@/components/ServiceDetailHero'
import ServiceDetailContent from '@/components/ServiceDetailContent'
import ServiceDetailSidebar from '@/components/ServiceDetailSidebar'
import ServiceDetailCTA from '@/components/ServiceDetailCTA'
import ServiceDetailFooter from '@/components/ServiceDetailFooter'
import ServiceDetailAnimationsInit from '@/components/ServiceDetailAnimationsInit'
import { getServiceBySlug, getAllServices } from '@/sanity/queries/services'
import Navbar from '@/components/Navbar'


export async function generateStaticParams() {
  const services = await getAllServices()
  return services.map((s) => ({ slug: s.slug }))
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params
  const [service, allServices] = await Promise.all([
    getServiceBySlug(slug),
    getAllServices(),
  ])

  if (!service) notFound()

  return (
    <>
      <ServiceDetailAnimationsInit />
      <div
        id="loader"
        className="fixed inset-0 bg-white z-[9999] flex items-center justify-center pointer-events-none"
      ></div>

      <Navbar />
      <ServiceDetailHeader title={service.title} />
      <ServiceDetailHero image={service.heroImage} title={service.title} />

      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <ServiceDetailContent
              description={service.description}
              descriptionExtra={service.descriptionExtra}
              processSteps={service.processSteps}
              processPoints={service.processPoints}
            />
          </div>
          <div className="lg:col-span-4 relative">
            <ServiceDetailSidebar currentSlug={slug} services={allServices} />
          </div>
        </div>
      </section>

      <ServiceDetailCTA />
      <ServiceDetailFooter />
    </>
  )
}
