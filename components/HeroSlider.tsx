'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const heroSlides = [
    {
        image: '/images/slide1.jpg',
        title: 'Zarafet ve Konfor',
        subtitle: 'Evinize değer katan mobilyalar',
    },
    {
        image: '/images/slider2.jpg',
        title: 'Özel Tasarım Koleksiyonlar',
        subtitle: 'Size özel mobilya çözümleri',
    },
    {
        image: '/images/slide3.jpg',
        title: 'Kaliteli Yaşam Alanları',
        subtitle: 'Hayalinizdeki evde yaşayın',
    },
    {
        image: '/images/slide4.jpg',
        title: 'Lüks ve Şıklık',
        subtitle: 'Her detayda mükemmellik',
    },
]

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    }

    return (
        <div className="relative h-[70vh] w-full overflow-hidden bg-stone-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={heroSlides[currentSlide].image}
                            alt={heroSlides[currentSlide].title}
                            fill
                            className="object-cover"
                            priority={currentSlide === 0}
                        />
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-end justify-start px-8 md:px-16 pb-20">
                        <div className="max-w-3xl">
                            <motion.h1
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-widest"
                            >
                                {heroSlides[currentSlide].title}
                            </motion.h1>
                            <motion.p
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="font-sans text-lg md:text-xl text-white/90 mb-8 tracking-wide"
                            >
                                {heroSlides[currentSlide].subtitle}
                            </motion.p>
                            <motion.a
                                href="/collections"
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-stone-900 text-white font-semibold px-10 py-4 rounded-none uppercase tracking-wider text-sm transition-all duration-300"
                            >
                                Koleksiyonu Keşfedin
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Minimal */}
            <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 -translate-y-1/2 p-3 border border-white/20 hover:bg-white/10 backdrop-blur-sm rounded-none transition-all duration-200 z-10 group"
                aria-label="Önceki Slayt"
            >
                <ChevronLeft className="w-6 h-6 text-white" strokeWidth={1.5} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 -translate-y-1/2 p-3 border border-white/20 hover:bg-white/10 backdrop-blur-sm rounded-none transition-all duration-200 z-10 group"
                aria-label="Sonraki Slayt"
            >
                <ChevronRight className="w-6 h-6 text-white" strokeWidth={1.5} />
            </button>

            {/* Dots Indicator - Minimal */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-[2px] transition-all duration-300 ${index === currentSlide
                            ? 'bg-white w-12'
                            : 'bg-white/30 hover:bg-white/50 w-8'
                            }`}
                        aria-label={`Slayt ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
