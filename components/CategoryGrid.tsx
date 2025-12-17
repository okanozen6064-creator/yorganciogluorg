'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const categories = [
    {
        name: 'Koltuk Takımları',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.40.jpeg',
        href: '/collections/koltuk-takimlari',
        description: 'Konforun en şık hali'
    },
    {
        name: 'Yatak Odası',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.43.jpeg',
        href: '/collections/yatak-odasi',
        description: 'Huzurlu uykular için'
    },
    {
        name: 'Yemek Odası',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.44.jpeg',
        href: '/collections/yemek-odasi',
        description: 'Keyifli sofralar'
    },
    {
        name: 'Oturma Grupları',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.45.jpeg',
        href: '/collections/oturma-gruplari',
        description: 'Modern yaşam alanları'
    },
    {
        name: 'Özel Tasarım',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.47.jpeg',
        href: '/collections/ozel-tasarim',
        description: 'Size özel üretim'
    },
]

export default function CategoryGrid() {
    return (
        <section className="py-32 px-4 md:px-8 bg-[#FDFBF7]"> {/* Çok açık krem rengi arka plan */}
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-serif text-5xl md:text-7xl font-medium text-stone-900 leading-tight">
                            Koleksiyonlar
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <p className="font-sans text-stone-500 text-lg max-w-xs text-right">
                            Evinizin her köşesi için özenle tasarlanmış, el işçiliği mobilyalar.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <Link href={category.href} className="group block h-full">
                                {/* Image Container - Framed Style (Smaller Image) */}
                                <div className="relative overflow-hidden aspect-[4/5] bg-stone-200 mb-6">
                                    <div className="absolute inset-0 bg-stone-300 animate-pulse" /> {/* Placeholder loading */}
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-[0.2]"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Overlay that lightens on hover */}
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Floating Action Button-like Icon */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                        <ArrowUpRight className="w-5 h-5 text-stone-900" />
                                    </div>
                                </div>

                                {/* Typography Outside Image */}
                                <div className="flex flex-col items-start px-2">
                                    <span className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-2">
                                        0{index + 1}
                                    </span>
                                    <h3 className="font-sans text-3xl font-light text-stone-900 mb-2 group-hover:tracking-wide transition-all duration-300">
                                        {category.name}
                                    </h3>
                                    <p className="font-sans text-stone-500 text-sm tracking-wide group-hover:text-stone-800 transition-colors">
                                        {category.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
