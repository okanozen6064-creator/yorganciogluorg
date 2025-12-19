'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BlogBanner() {
    return (
        <section className="relative w-full bg-[#EAE8E4] overflow-hidden py-16 md:py-24">
            <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 z-10 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-stone-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                            Yorgancıoğlu Digital
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 mt-4 mb-6 leading-[0.9]">
                            TASARIM<br />GÜNLÜKLERİ
                        </h2>
                        <p className="text-stone-600 text-lg md:text-xl font-light max-w-md mx-auto md:mx-0 leading-relaxed font-serif italic">
                            "Eviniz için ilham verici hikayeler, trendler ve dekorasyon sırları."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-3 border-b-2 border-stone-900 pb-1 text-stone-900 hover:text-stone-600 hover:border-stone-600 transition-all duration-300 group"
                        >
                            <span className="text-sm font-bold tracking-widest uppercase">Dergiye Göz At</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Magazine Cover Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: -10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-1 md:order-2 flex justify-center md:justify-end perspective-1000"
                >
                    <div className="relative w-[300px] md:w-[450px] aspect-[1/1.4] shadow-2xl transform transition-transform hover:scale-105 duration-500">
                        <Image
                            src="/magazine-cover.png"
                            alt="Yorgancıoğlu Dergi Kapağı"
                            fill
                            className="object-cover rounded-sm"
                            priority
                        />
                        {/* Shadow effect */}
                        <div className="absolute inset-0 shadow-[20px_20px_40px_rgba(0,0,0,0.3)] pointer-events-none rounded-sm" />
                    </div>
                </motion.div>
            </div>

            {/* Background Texture/Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-200/50 to-transparent -z-0 pointer-events-none" />
        </section>
    )
}
