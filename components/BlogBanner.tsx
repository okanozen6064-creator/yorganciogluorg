'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BlogBanner() {
    return (
        <section className="relative w-full h-[400px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero/hero3.jpg" // Using an existing high-quality image
                    alt="Blog Banner"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-stone-200 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4"
                >
                    İlham & Dekorasyon
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight"
                >
                    Tasarım Günlükleri
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 border border-white/30 bg-white/10 hover:bg-white hover:text-stone-900 text-white px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 group"
                    >
                        <span className="text-sm font-bold tracking-widest uppercase">Keşfet</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
