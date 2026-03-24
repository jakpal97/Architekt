
import PortfolioHeader from '@/components/PortfolioHeader'
import PortfolioList from '@/components/PortfolioList'
import CTAContact from '@/components/CTAContact'
import ServicesFooter from '@/components/ServicesFooter'
import PortfolioAnimationsInit from '@/components/PortfolioAnimationsInit'
import { getAllProjects } from '@/sanity/queries/projects'
import Navbar from '@/components/Navbar'

export default async function Portfolio() {
  const projects = await getAllProjects()

  return (
    <>
      <PortfolioAnimationsInit />
      <Navbar />
      <PortfolioHeader />
      <PortfolioList projects={projects} />
      <CTAContact />
      <ServicesFooter />
    </>
  )
}
