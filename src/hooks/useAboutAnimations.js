'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useAboutAnimations() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		// Stany startowe
		gsap.set('#about-badge', { opacity: 0, y: 16 })
		gsap.set('#about-title', { y: '110%' })
		gsap.set('.about-block', { opacity: 0, y: 48 })
		gsap.set('.about-stat', { opacity: 0, y: 24 })
		gsap.set('.about-value', { opacity: 0, y: 20 })
		gsap.set('.footer-letter', { y: '100%' })

		// Header – pojawia się od razu po załadowaniu
		const tl = gsap.timeline({ delay: 0.2 })
		tl.to('#about-badge', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
		tl.to('#about-title', { y: '0%', duration: 1, ease: 'power3.out' }, '-=0.4')

		// Bloki historii – fade + slide na scroll
		document.querySelectorAll('.about-block').forEach((block) => {
			gsap.to(block, {
				opacity: 1,
				y: 0,
				duration: 0.9,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: block,
					start: 'top 82%',
					once: true,
				},
			})
		})

		// Statystyki – stagger przy wejściu sekcji
		gsap.to('.about-stat', {
			opacity: 1,
			y: 0,
			duration: 0.7,
			stagger: 0.12,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '#about-numbers',
				start: 'top 78%',
				once: true,
			},
		})

		// Wartości – każda karta osobno
		document.querySelectorAll('.about-value').forEach((val, i) => {
			gsap.to(val, {
				opacity: 1,
				y: 0,
				duration: 0.6,
				delay: (i % 3) * 0.08,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: val,
					start: 'top 88%',
					once: true,
				},
			})
		})

		// Litery stopki
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
