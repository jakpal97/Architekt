'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function usePortfolioAnimations() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		// Stany startowe
		gsap.set('#portfolio-badge', { opacity: 0, y: 16 })
		gsap.set('#portfolio-title', { y: '110%' })
		gsap.set('#portfolio-meta', { opacity: 0, x: 24 })
		gsap.set('.portfolio-item', { opacity: 0, y: 50 })
		gsap.set('.footer-letter', { y: '100%' })

		// Header
		const tl = gsap.timeline({ delay: 0.2 })
		tl.to('#portfolio-badge', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
		tl.to('#portfolio-title', { y: '0%', duration: 1, ease: 'power3.out' }, '-=0.45')
		tl.to('#portfolio-meta', { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, '-=0.7')

		// Projekt items – fade-in na scroll
		document.querySelectorAll('.portfolio-item').forEach((item, i) => {
			gsap.to(item, {
				opacity: 1,
				y: 0,
				duration: 0.9,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: item,
					start: 'top 82%',
					once: true,
				},
			})
		})

		// Footer
		const footerLetters = document.querySelectorAll('.footer-letter')
		if (footerLetters.length > 0) {
			gsap.to('.footer-letter', {
				y: '0%',
				duration: 0.8,
				stagger: 0.04,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '#main-footer',
					start: 'top 80%',
					once: true,
				},
			})
		}

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill())
			gsap.killTweensOf('*')
		}
	}, [])
}
