'use client';

import useAnimations from '@/hooks/useAnimations';
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

export default function Home() {
  useAnimations();

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Projects />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </>
  );
}
