'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
    {
        name: 'Koltuk Takımları',
        image: '/images/category-sofa.jpg',
        href: '/collections/koltuk-takimlari',
        span: 'col-span-2',
    },
    {
        name: 'Yatak Odası',
        image: '/images/category-bedroom.jpg',
        href: '/collections/yatak-odasi',
        span: 'col-span-1',
    },
    {
        name: 'Yemek Odası',
        image: '/images/category-dining.jpg',
        href: '/collections/yemek-odasi',
        span: 'col-span-1',
    },
    {
        name: 'Oturma Grupları',
        image: '/images/category-living.jpg',
        href: '/collections/oturma-gruplari',
        span: 'col-span-1',
    },
    {
        name: 'Özel Tasarım',
        image: '/images/category-custom.jpg',
        href: '/collections/ozel-tasarim',
        span: 'col-span-1',
    },
]

export default function CategoryGrid() {
    return (
        <section className="py-32 px-4 md:px-8 bg-stone-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 uppercase tracking-widest mb-4">
                        Koleksiyonlar
                    </h2>
                    <p className="font-sans text-stone-600 text-lg tracking-wide">
                        Her mekana özel tasarımlar
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={category.span}
                        >
                            <Link href={category.href}>
                                <div className="group relative h-[400px] overflow-hidden bg-stone-200">
                                    {/* Image */}
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                    {/* Category Name */}
                                    <div className="absolute inset-0 flex items-end justify-center p-8">
                                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-white uppercase tracking-widest group-hover:underline underline-offset-8 transition-all duration-300">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
