import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import LogoCarousel from '@/components/LogoCarousel';
import HomeAnimationsInit from '@/components/HomeAnimationsInit';
import { getHomePage } from '@/sanity/queries/homepage';
import { getLatestPosts } from '@/sanity/queries/blog';
import { getLogoPartners, getCooperationSteps } from '@/sanity/queries/settings';
import { getAllServices } from '@/sanity/queries/services';

export default async function Home() {
  const [homePage, latestPosts, partners, cooperationSteps, allServices] = await Promise.all([
    getHomePage(),
    getLatestPosts(2),
    getLogoPartners(),
    getCooperationSteps(),
    getAllServices(),
  ]);

  return (
    <>
      <HomeAnimationsInit />
      <Loader />
      <Navbar />
      <Hero
        title1={homePage?.heroTitle1}
        title2={homePage?.heroTitle2}
        videoUrl={homePage?.heroVideoUrl}
        posterUrl={homePage?.heroVideoPosterUrl}
      />
      <LogoCarousel brands={partners} />
      <About />
      <Services services={allServices} />
      <Works />
      <Projects projects={homePage?.featuredProjects} />
      <Testimonials steps={cooperationSteps} />
      <Blog posts={latestPosts} />
      <CTA
        headline={homePage?.ctaHeadline}
        leadText={homePage?.ctaLeadText}
        stats={homePage?.ctaStats}
        scopeOptions={homePage?.ctaScopeOptions}
      />
      <Footer />
    </>
  );
}
