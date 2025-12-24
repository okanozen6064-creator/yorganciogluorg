'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'


export default function LandingIntro() {
    const [show, setShow] = useState(true)
    const [phase, setPhase] = useState(0) // 0: Start, 1: Name, 2: Slogan, 3: Exit

    useEffect(() => {
        // Session storage kontrolü
        const hasVisited = sessionStorage.getItem('visited_intro')
        if (hasVisited) {
            setShow(false)
            return
        }

        // Animasyon zamanlaması
        const timer1 = setTimeout(() => setPhase(1), 500) // İsim gelsin
        const timer2 = setTimeout(() => setPhase(2), 1500) // Slogan gelsin
        const timer3 = setTimeout(() => {
            setPhase(3) // Çıkış başlasın
        }, 3500)

        const timer4 = setTimeout(() => {
            setShow(false) // Component kaldırılsın
            sessionStorage.setItem('visited_intro', 'true')
        }, 4500)

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
            clearTimeout(timer4)
        }
    }, [])

    if (!show) return null

    return (
        <AnimatePresence>
            {phase < 3 && (
                <motion.div
                    key="landing"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -1000 }} // Perde gibi yukarı çekilsin
                    transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-stone-950 text-stone-50 overflow-hidden"
                >
                    <div className="relative text-center px-4 w-full max-w-4xl mx-auto">
                        {/* Background Gradient Spot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Year */}


                            {/* Brand Name */}
                            <div className="overflow-visible mb-8">
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={phase >= 1 ? { scale: 1.5, opacity: 1 } : {}}
                                    transition={{ duration: 1.5, ease: 'easeOut' }}
                                    className="relative w-64 h-32 md:w-96 md:h-48"
                                >
                                    <Image
                                        src="/yorgancioglu-new-logo.png"
                                        alt="Yorgancıoğlu Mobilya"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </div>

                            {/* Divider Line */}
                            {/* <motion.div
                                initial={{ width: 0 }}
                                animate={phase >= 2 ? { width: '100px' } : {}}
                                transition={{ duration: 0.8 }}
                                className="h-[1px] bg-stone-700 mb-8"
                            /> */}

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
