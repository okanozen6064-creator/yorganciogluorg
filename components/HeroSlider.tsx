'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

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
    const [isPlaying, setIsPlaying] = useState(true)
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const SLIDE_DURATION = 8000 // 8 seconds

    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
            }, SLIDE_DURATION)
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [isPlaying, currentSlide])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        resetTimer()
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
        resetTimer()
    }

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current)
        if (isPlaying) {
            timerRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
            }, SLIDE_DURATION)
        }
    }

    const togglePlay = () => setIsPlaying(!isPlaying)

    return (
        <div className="relative h-[85vh] w-full overflow-hidden bg-stone-900">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {/* Background Image with Ken Burns Effect */}
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: SLIDE_DURATION / 1000 + 2, ease: "linear" }}
                    >
                        <Image
                            src={heroSlides[currentSlide].image}
                            alt={heroSlides[currentSlide].title}
                            fill
                            className="object-cover"
                            priority={true}
                        />
                        {/* Vignette & Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="relative h-full flex items-center justify-center text-center px-8 z-10">
                <div className="max-w-5xl overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            className="flex flex-col items-center"
                        >
                            <motion.h2
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -30, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="font-serif text-5xl md:text-8xl font-medium text-white mb-6 uppercase tracking-widest leading-tight drop-shadow-2xl"
                            >
                                <span className="block text-[#D4AF37] text-2xl md:text-3xl tracking-[0.5em] mb-4 font-sans font-light">
                                    YORGANCIOĞLU
                                </span>
                                {heroSlides[currentSlide].title}
                            </motion.h2>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                exit={{ scaleX: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="w-24 h-[1px] bg-white/50 mb-8"
                            />

                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                                className="font-sans text-lg md:text-2xl text-stone-200 mb-10 tracking-wider font-light max-w-2xl mx-auto"
                            >
                                {heroSlides[currentSlide].subtitle}
                            </motion.p>

                            <motion.a
                                href="/collections"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="group relative overflow-hidden inline-block border border-white/40 hover:border-white text-white px-12 py-4 uppercase tracking-widest text-sm transition-all duration-300 backdrop-blur-sm"
                            >
                                <span className="relative z-10 group-hover:text-stone-900 transition-colors duration-300 font-semibold">
                                    Koleksiyonu Keşfet
                                </span>
                                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                            </motion.a>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 left-0 right-0 z-20 px-8 md:px-16 flex items-center justify-between">
                {/* Progress Bar & Dots */}
                <div className="flex items-center gap-6">
                    <button onClick={togglePlay} className="text-white/70 hover:text-white transition-colors">
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>

                    <div className="flex gap-4">
                        {heroSlides.map((_, index) => (
                            <div key={index} className="relative cursor-pointer group" onClick={() => { setCurrentSlide(index); resetTimer(); }}>
                                <div className={`h-[2px] transition-all duration-500 bg-white/30 group-hover:bg-white/60 ${index === currentSlide ? 'w-16' : 'w-8'}`}>
                                    {index === currentSlide && isPlaying && (
                                        <motion.div
                                            layoutId="progress"
                                            className="h-full bg-white"
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <span className="text-white/50 text-xs font-sans tracking-widest">
                        0{currentSlide + 1} / 0{heroSlides.length}
                    </span>
                </div>

                {/* Arrows */}
                <div className="hidden md:flex gap-2">
                    <button
                        onClick={prevSlide}
                        className="p-4 border border-white/10 hover:bg-white/10 text-white transition-all rounded-full backdrop-blur-md"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-4 border border-white/10 hover:bg-white/10 text-white transition-all rounded-full backdrop-blur-md"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}
