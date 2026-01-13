'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useServiceDetailAnimations() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		// Set initial states
		gsap.set('.process-icon-box', { opacity: 0, y: 30 })
		gsap.set('.footer-letter', { y: '100%' })

		// Page Loader
		gsap.to('#loader', { autoAlpha: 0, duration: 0.5, delay: 0.2 })

		// Hero Image Animation
		const heroContainer = document.querySelector('#hero-img-container')
		const heroImg = document.querySelector('#hero-img')

		if (heroContainer && heroImg) {
			// Set initial state
			gsap.set(heroContainer, {
				width: '90%',
				borderRadius: '32px',
				margin: '0 auto',
			})

			// Animate container expansion
			gsap.to(heroContainer, {
				width: '100%',
				borderRadius: '16px',
				duration: 1.5,
				ease: 'expo.out',
				delay: 0.5,
			})

			// Animate image scale
			gsap.fromTo(
				heroImg,
				{ scale: 1.2 },
				{
					scale: 1.1,
					duration: 1.5,
					ease: 'expo.out',
					delay: 0.5,
				}
			)

			// Parallax on scroll
			gsap.to(heroImg, {
				scrollTrigger: {
					trigger: heroContainer,
					start: 'top top',
					end: 'bottom top',
					scrub: true,
				},
				y: 100,
			})
		}

		// Sidebar animations
		const sidebarItems = document.querySelectorAll('.sticky > div')
		if (sidebarItems.length > 0) {
			gsap.fromTo(
				sidebarItems,
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1,
					stagger: 0.2,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.sticky',
						start: 'top 80%',
						once: true,
					},
				}
			)
		}

		// Process icons animation
		const processBoxes = document.querySelectorAll('.process-icon-box')
		if (processBoxes.length > 0) {
			gsap.to(processBoxes, {
				y: 0,
				opacity: 1,
				duration: 0.8,
				stagger: 0.1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: processBoxes[0],
					start: 'top 85%',
					once: true,
				},
			})
		}

		// Footer letters animation
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
