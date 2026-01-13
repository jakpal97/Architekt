'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useBlogAnimations() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		// Page Loader & Header Intro
		const tl = gsap.timeline()

		tl.to('#loader', { autoAlpha: 0, duration: 0.5 })
			.from('#blog-badge', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.2')
			.from('#blog-title', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.6')

		// Blog Cards Scroll Animation
		const blogCards = document.querySelectorAll('.blog-card')
		blogCards.forEach(card => {
			gsap.from(card, {
				scrollTrigger: {
					trigger: card,
					start: 'top 85%',
				},
				y: 60,
				opacity: 0,
				duration: 1.2,
				ease: 'power3.out',
			})
		})

		// CTA Video Parallax
		const ctaHeading = document.querySelector('#cta-heading')
		if (ctaHeading) {
			gsap.from(ctaHeading, {
				scrollTrigger: {
					trigger: '#cta-video-section',
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1,
				},
				y: 80,
			})
		}

		// Footer Animation
		const footerLetters = document.querySelectorAll('.footer-letter')
		if (footerLetters.length > 0) {
			gsap.to('.footer-letter', {
				scrollTrigger: {
					trigger: '#main-footer',
					start: 'top 70%',
				},
				y: '0%',
				duration: 1,
				stagger: 0.05,
				ease: 'power4.out',
			})
		}

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}
	}, [])
}
