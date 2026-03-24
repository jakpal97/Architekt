'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSettings } from '@/components/SettingsProvider'

const NAV_ITEMS = [
  { label: 'O Nas',     href: '/o-nas'     },
  { label: 'Usługi',   href: '/uslugi'    },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog',      href: '/blog'      },
  { label: 'Kontakt',   href: '/kontakt'   },
]

export default function Navbar({ logoUrl: logoProp }) {
  const settings = useSettings()
  const logoUrl = logoProp || settings?.logoUrl
  const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // 1. Decydujemy czy pokazać/ukryć (Hide on scroll down, show on up)
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            // 2. Decydujemy czy dodać tło (Blur efekt po scrollu)
            if (currentScrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-8 md:px-12 py-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            } ${
                isScrolled ? 'bg-white/80 backdrop-blur-md border-bottom border-black/5 py-4' : 'bg-transparent'
            }`}
        >
            {/* Logo Section */}
            <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
                <img src={logoUrl || '/logo.png'} alt="WPM solutions logo" className='w-20 h-10 ' />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
                <Link href="/" className="relative group text-black">
                    Strona Główna
                    <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-black transition-transform duration-500 ${pathname === '/' ? 'scale-x-100 origin-right group-hover:scale-x-0 group-hover:origin-left' : 'scale-x-0 origin-left group-hover:scale-x-100'}`}></span>
                </Link>
                {NAV_ITEMS.map(({ label, href }) => {
                    const isActive = pathname === href || pathname.startsWith(href + '/')
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`relative group transition-colors duration-300 hover:text-black ${isActive ? 'text-black' : 'text-black/50'}`}
                        >
                            {label}
                            <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-black transition-transform duration-500 ${isActive ? 'scale-x-100 origin-right group-hover:scale-x-0 group-hover:origin-left' : 'scale-x-0 origin-left group-hover:scale-x-100'}`}></span>
                        </Link>
                    )
                })}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-6">
                <a
                    href="#contact"
                    className="group relative border border-black/10 rounded-full px-7 py-2.5 text-[11px] font-bold uppercase tracking-wider overflow-hidden transition-all duration-500 hover:border-black"
                >
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                        Skontaktuj Się <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </span>
                    <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"></div>
                </a>
            </div>
        </nav>
    )
}