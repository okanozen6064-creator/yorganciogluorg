'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PosterSection() {
    return (
        <section className="relative h-[500px] w-full overflow-hidden bg-stone-900">
            {/* Parallax Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/slide4.jpg"
                    alt="Yorgancıoğlu Mobilya"
                    fill
                    className="object-cover"
                    style={{ transform: 'translateY(0)' }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-8">
                <div className="text-center max-w-4xl">
                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-5xl md:text-7xl font-bold text-white uppercase tracking-widest mb-8"
                    >
                        Evinizin Ruhu Değişiyor
                    </motion.h2>

                    <motion.a
                        href="/catalog"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-block border-2 border-white bg-transparent hover:bg-white hover:text-stone-900 text-white font-semibold px-12 py-4 uppercase tracking-wider text-sm transition-all duration-300"
                    >
                        Kataloğu İncele
                    </motion.a>
                </div>
            </div>
        </section>
    )
}
