'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useBlogAnimations() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		// Set initial states
		gsap.set('#blog-badge', { opacity: 0, y: 20 })
		gsap.set('#blog-title', { opacity: 0, y: 50 })
		gsap.set('.blog-card', { opacity: 0, y: 60 })
		gsap.set('.footer-letter', { y: '100%' })

		// Page Loader & Header Intro
		const tl = gsap.timeline()

		tl.to('#loader', { autoAlpha: 0, duration: 0.5 })
			.to('#blog-badge', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.2')
			.to('#blog-title', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.6')

		// Blog Cards Scroll Animation
		const blogCards = document.querySelectorAll('.blog-card')
		blogCards.forEach(card => {
			gsap.to(card, {
				y: 0,
				opacity: 1,
				duration: 1.2,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: card,
					start: 'top 85%',
					once: true,
				},
			})
		})

		// CTA Video Parallax
		const ctaHeading = document.querySelector('#cta-heading')
		if (ctaHeading) {
			gsap.set(ctaHeading, { y: 80 })
			gsap.to(ctaHeading, {
				scrollTrigger: {
					trigger: '#cta-video-section',
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1,
				},
				y: -80,
			})
		}

		// Footer Animation
		const footerLetters = document.querySelectorAll('.footer-letter')
		if (footerLetters.length > 0) {
			gsap.to('.footer-letter', {
				scrollTrigger: {
					trigger: '#main-footer',
					start: 'top 70%',
					once: true,
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
			gsap.killTweensOf('*')
		}
	}, [])
}
