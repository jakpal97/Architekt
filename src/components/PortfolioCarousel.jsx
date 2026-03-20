'use client'

import { useState, useRef } from 'react'

export default function PortfolioCarousel({ images }) {
	const [current, setCurrent] = useState(0)
	const dragStartX = useRef(null)
	const isDragging = useRef(false)
	const DRAG_THRESHOLD = 50

	const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
	const next = () => setCurrent((c) => (c + 1) % images.length)

	// ── Mouse drag ──
	const onMouseDown = (e) => {
		dragStartX.current = e.clientX
		isDragging.current = false
	}
	const onMouseMove = (e) => {
		if (dragStartX.current === null) return
		if (Math.abs(e.clientX - dragStartX.current) > 5) isDragging.current = true
	}
	const onMouseUp = (e) => {
		if (dragStartX.current === null) return
		const diff = dragStartX.current - e.clientX
		if (Math.abs(diff) > DRAG_THRESHOLD) diff > 0 ? next() : prev()
		dragStartX.current = null
		isDragging.current = false
	}

	// ── Touch drag ──
	const onTouchStart = (e) => {
		dragStartX.current = e.touches[0].clientX
	}
	const onTouchEnd = (e) => {
		if (dragStartX.current === null) return
		const diff = dragStartX.current - e.changedTouches[0].clientX
		if (Math.abs(diff) > DRAG_THRESHOLD) diff > 0 ? next() : prev()
		dragStartX.current = null
	}

	return (
		<div className="relative rounded-2xl overflow-hidden select-none group">

			{/* ── Track ── */}
			<div
				className="relative h-[520px] md:h-[600px] cursor-grab active:cursor-grabbing overflow-hidden"
				onMouseDown={onMouseDown}
				onMouseMove={onMouseMove}
				onMouseUp={onMouseUp}
				onMouseLeave={onMouseUp}
				onTouchStart={onTouchStart}
				onTouchEnd={onTouchEnd}
			>
				<div
					className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
					style={{ transform: `translateX(-${current * 100}%)` }}
				>
					{images.map((src, i) => (
						<div key={i} className="relative w-full h-full shrink-0">
							<img
								src={src}
								alt=""
								draggable={false}
								className="w-full h-full object-cover pointer-events-none"
							/>
						</div>
					))}
				</div>
			</div>

			{/* ── Arrows ── */}
			<button
				onClick={prev}
				aria-label="Poprzednie zdjęcie"
				className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-white/60 flex items-center justify-center text-black text-sm shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 cursor-pointer"
			>
				←
			</button>
			<button
				onClick={next}
				aria-label="Następne zdjęcie"
				className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-white/60 flex items-center justify-center text-black text-sm shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 cursor-pointer"
			>
				→
			</button>

			{/* ── Counter badge ── */}
			<div className="absolute bottom-5 right-5 z-10 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
				{String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
			</div>

			{/* ── Dots ── */}
			<div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
				{images.map((_, i) => (
					<button
						key={i}
						onClick={() => setCurrent(i)}
						aria-label={`Zdjęcie ${i + 1}`}
						className={`rounded-full transition-all duration-400 cursor-pointer ${
							i === current
								? 'bg-white w-5 h-1.5'
								: 'bg-white/50 w-1.5 h-1.5 hover:bg-white/80'
						}`}
					/>
				))}
			</div>

		</div>
	)
}
