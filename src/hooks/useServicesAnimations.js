'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useServicesAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Service items - simple fade in on scroll
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        }
      );
    });

    // Footer letters
    const footerLetters = document.querySelectorAll('.footer-letter');
    if (footerLetters.length > 0) {
      gsap.to('.footer-letter', {
        y: '0%',
        duration: 0.8,
        stagger: 0.04,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#main-footer',
          start: 'top 80%',
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
