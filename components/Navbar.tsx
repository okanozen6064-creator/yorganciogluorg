'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/collections', label: 'Koleksiyonlar' },
        { href: '/about', label: 'Hakkımızda' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'İletişim' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 backdrop-blur-md shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-28">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 group">
                        <div className="flex flex-col items-center justify-center leading-none">
                            <span className={`font-cormorant text-5xl md:text-6xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-[#C41E3A]' : 'text-white group-hover:text-stone-200'}`}>
                                Yorgancıoğlu
                            </span>
                            <span className={`font-serif text-sm md:text-base tracking-[0.4em] uppercase mt-1 transition-colors duration-300 ${scrolled ? 'text-stone-800' : 'text-white/80 group-hover:text-white'}`}>
                                mobilya
                            </span>
                        </div>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-sans uppercase tracking-wider text-sm transition-colors duration-200 relative group ${scrolled
                                    ? 'text-stone-700 hover:text-stone-900'
                                    : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/905449404910"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`border px-6 py-2.5 uppercase tracking-wider text-sm font-semibold transition-all duration-200 ${scrolled
                                ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
                                : 'border-white text-white hover:bg-white hover:text-stone-900'
                                }`}
                        >
                            Randevu Al
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 transition-colors ${scrolled ? 'text-stone-900' : 'text-white'
                            }`}
                    >
                        {isOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block px-4 py-3 text-stone-700 hover:bg-stone-50 uppercase tracking-wider text-sm transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/905449404910"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-4 py-3 uppercase tracking-wider text-sm font-semibold text-center transition-all duration-200"
                            >
                                Randevu Al
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    )
}
