'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const categories = [
    {
        name: 'Koltuk Takımları',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.40.jpeg',
        href: '/collections/koltuk-takimlari',
    },
    {
        name: 'Yatak Odası',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.43.jpeg',
        href: '/collections/yatak-odasi',
    },
    {
        name: 'Yemek Odası',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.44.jpeg',
        href: '/collections/yemek-odasi',
    },
    {
        name: 'Oturma Grupları',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.45.jpeg',
        href: '/collections/oturma-gruplari',
    },
    {
        name: 'Köşe Takımları',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.42.jpeg',
        href: '/collections/kose-takimlari',
    },
    {
        name: 'TV Üniteleri',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.46.jpeg',
        href: '/collections/tv-uniteleri',
    },
    {
        name: 'Genç Odası',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.43 (1).jpeg',
        href: '/collections/genc-odasi',
    },
    {
        name: 'Özel Tasarım',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.47.jpeg',
        href: '/collections/ozel-tasarim',
    },
]

export default function CategoryCircles() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    return (
        <section className="bg-white py-12 border-b border-stone-100">
            <div className="max-w-[1920px] mx-auto px-4 md:px-8">
                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto pb-4 pt-4 gap-4 md:gap-8 md:justify-center scrollbar-hide snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center flex-shrink-0 snap-center group cursor-pointer"
                        >
                            <Link href={category.href} className="flex flex-col items-center gap-3">
                                {/* Circle Image */}
                                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-1 border border-stone-200 group-hover:border-[#D4AF37] transition-colors duration-500">
                                    <div className="relative w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="160px"
                                        />
                                        {/* Golden Overlay on Hover */}
                                        <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>

                                {/* Text */}
                                <span className="font-serif text-stone-900 text-sm md:text-base tracking-wide font-medium group-hover:text-[#D4AF37] transition-colors duration-300">
                                    {category.name}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
