'use client'

import { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function useAnimations() {
	useIsomorphicLayoutEffect(() => {
		// Register GSAP plugins
		gsap.registerPlugin(ScrollTrigger)

		let lenis = null
		let rafId = null
		let ctx = null

		// Create GSAP context
		ctx = gsap.context(() => {
			// Set initial states IMMEDIATELY before anything renders visibly
			gsap.set('.hero-letter', { y: '120%', opacity: 0 })
			gsap.set('#hero-image-wrapper', { y: '30%', opacity: 0 })
			gsap.set('#about-text', { opacity: 0, y: 30 })
			gsap.set('.about-img', { scaleY: 0 })
			gsap.set('.service-item', { opacity: 0, y: 30 })
			gsap.set('.footer-letter', { y: '100%' })

			// Initialize Lenis smooth scroll
			lenis = new Lenis({
				duration: 1.2,
				easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				direction: 'vertical',
				smooth: true,
			})

			function raf(time) {
				lenis.raf(time)
				rafId = requestAnimationFrame(raf)
			}
			rafId = requestAnimationFrame(raf)

			// Hero animation timeline
			const tlHero = gsap.timeline()

			tlHero
				.to('#loader', {
					y: '-100%',
					duration: 1.2,
					ease: 'power4.inOut',
					delay: 0.5,
				})
				.to(
					'#hero-image-wrapper',
					{
						y: 0,
						opacity: 1,
						duration: 1.2,
						ease: 'power3.out',
					},
					'-=0.4'
				)
				.to(
					'.hero-letter',
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						stagger: 0.08,
						ease: 'power3.out',
					},
					'-=0.8'
				)

			// About section animations
			const aboutText = document.querySelector('#about-text')
			if (aboutText) {
				gsap.to('#about-text', {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '#about',
						start: 'top 70%',
						once: true,
					},
				})
			}

			const aboutImgs = gsap.utils.toArray('.about-img')
			aboutImgs.forEach((img, i) => {
				gsap.to(img, {
					scaleY: 1,
					duration: 1.2,
					ease: 'expo.out',
					delay: i * 0.2,
					scrollTrigger: {
						trigger: '#about',
						start: 'top 60%',
						once: true,
					},
				})
			})

			// Services animation
			const serviceItems = gsap.utils.toArray('.service-item')
			serviceItems.forEach((item, i) => {
				gsap.to(item, {
					y: 0,
					opacity: 1,
					duration: 0.8,
					delay: i * 0.1,
					scrollTrigger: {
						trigger: item,
						start: 'top 85%',
						once: true,
					},
				})
			})

			// Recent Works animation with pinReparent for proper cleanup
			const worksContainer = document.querySelector('#works-container')
			if (worksContainer) {
				const worksTl = gsap.timeline({
					scrollTrigger: {
						trigger: '#works-container',
						start: 'top top',
						end: '+=250%',
						pin: true,
						pinReparent: true,
						scrub: 1,
						anticipatePin: 1,
					},
				})

				worksTl
					.to('#work-left', { x: -100, duration: 2 }, 'split')
					.to('#work-right', { x: 100, duration: 2 }, 'split')
					.to('#work-img-wrapper', { width: '400px', duration: 2, ease: 'power2.inOut' }, 'split')
					.to(
						'#work-img-wrapper',
						{ width: '100vw', height: '100vh', borderRadius: 0, duration: 3, ease: 'power1.inOut' },
						'expand'
					)
					.to(['#work-left', '#work-right', '#recent-text'], { opacity: 0, duration: 0.5 }, 'expand+=0.5')
					.to('#work-main-img', { scale: 1, duration: 3 }, 'expand')
			}

			// Testimonials animation
			const testimonialImg = document.querySelector('.testimonial-img')
			if (testimonialImg) {
				gsap.fromTo(
					'.testimonial-img',
					{ scale: 1.2, opacity: 0 },
					{
						scale: 1,
						opacity: 1,
						duration: 1.5,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: '#testimonials',
							start: 'top 70%',
							once: true,
						},
					}
				)
			}

			// CTA Parallax Effect
			const ctaBg = document.querySelector('#cta-bg')
			if (ctaBg) {
				gsap.to('#cta-bg', {
					scrollTrigger: {
						trigger: '#cta',
						start: 'top bottom',
						end: 'bottom top',
						scrub: true,
					},
					y: 100,
				})
			}

			// Footer animation
			const footerLetters = gsap.utils.toArray('.footer-letter')
			if (footerLetters.length > 0) {
				gsap.to('.footer-letter', {
					scrollTrigger: {
						trigger: '#main-footer',
						start: 'top 60%',
						once: true,
					},
					y: '0%',
					duration: 1,
					stagger: 0.05,
					ease: 'power4.out',
				})
			}
		})

		// Cleanup function
		return () => {
			// Cancel animation frame first
			if (rafId) {
				cancelAnimationFrame(rafId)
			}

			// Destroy Lenis
			if (lenis) {
				lenis.destroy()
			}

			// Kill all ScrollTriggers and clear their pins
			ScrollTrigger.getAll().forEach(st => {
				st.kill(true)
			})

			// Revert GSAP context
			if (ctx) {
				ctx.revert()
			}

			// Clear inline styles and refresh
			ScrollTrigger.clearScrollMemory()
			gsap.killTweensOf('*')
		}
	}, [])
}
