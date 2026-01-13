'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useBlogDetailAnimations() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		// Set initial states
		gsap.set('.anim-text-reveal', { opacity: 0, y: 100 })
		gsap.set('.anim-img-reveal', { opacity: 0, scale: 0.9 })
		gsap.set('.anim-fade-up', { opacity: 0, y: 40 })
		gsap.set('.blog-card', { opacity: 0, y: 50 })
		gsap.set('.footer-letter', { y: '100%' })

		// Load & Reveal Header
		const tl = gsap.timeline()

		tl.to('#loader', { autoAlpha: 0, duration: 0.5 })
			.to('.anim-text-reveal', { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }, '-=0.2')
			.to('.anim-img-reveal', { scale: 1, opacity: 1, duration: 1.5, ease: 'expo.out' }, '-=1')

		// Parallax for Hero Image
		const heroImg = document.querySelector('#hero-img')
		if (heroImg) {
			gsap.to(heroImg, {
				scrollTrigger: {
					trigger: '.anim-img-reveal',
					start: 'top top',
					end: 'bottom top',
					scrub: true,
				},
				y: 100,
			})
		}

		// Content Reveal Animation
		const fadeUpElements = document.querySelectorAll('.anim-fade-up')
		fadeUpElements.forEach(element => {
			gsap.to(element, {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: element,
					start: 'top 85%',
					once: true,
				},
			})
		})

		// More Articles Reveal
		const blogCards = document.querySelectorAll('.blog-card')
		blogCards.forEach((card, i) => {
			gsap.to(card, {
				y: 0,
				opacity: 1,
				duration: 1,
				delay: i * 0.1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: card,
					start: 'top 90%',
					once: true,
				},
			})
		})

		// Video CTA Parallax
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
