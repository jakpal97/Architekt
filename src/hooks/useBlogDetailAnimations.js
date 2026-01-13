'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useBlogDetailAnimations() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		// Load & Reveal Header
		const tl = gsap.timeline()

		tl.to('#loader', { autoAlpha: 0, duration: 0.5 })
			.from('.anim-text-reveal', { y: 100, opacity: 0, duration: 1.2, ease: 'power4.out' }, '-=0.2')
			.from('.anim-img-reveal', { scale: 0.9, opacity: 0, duration: 1.5, ease: 'expo.out' }, '-=1')
			.from('.anim-fade-up:first-of-type', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.5')

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
			gsap.from(element, {
				scrollTrigger: {
					trigger: element,
					start: 'top 85%',
				},
				y: 40,
				opacity: 0,
				duration: 1,
				ease: 'power3.out',
			})
		})

		// More Articles Reveal
		const blogCards = document.querySelectorAll('.blog-card')
		blogCards.forEach((card, i) => {
			gsap.from(card, {
				scrollTrigger: {
					trigger: card,
					start: 'top 90%',
				},
				y: 50,
				opacity: 0,
				duration: 1,
				delay: i * 0.1,
				ease: 'power3.out',
			})
		})

		// Video CTA Parallax
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
