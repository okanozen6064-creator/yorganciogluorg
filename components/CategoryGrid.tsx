'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
        name: 'Özel Tasarım',
        image: '/lizbon koltuk takımı/WhatsApp Image 2025-12-16 at 17.23.47.jpeg',
        href: '/collections/ozel-tasarim',
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

                {/* Grid - 2 Rows x Variable Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* First Row - 2 items (one taking 2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="md:col-span-2"
                    >
                        <Link href={categories[0].href}>
                            <div className="group relative h-[450px] overflow-hidden bg-stone-200">
                                <Image
                                    src={categories[0].image}
                                    alt={categories[0].name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                                <div className="absolute inset-0 flex flex-col justify-end p-10">
                                    <span className="text-stone-300 text-xs tracking-[0.3em] font-sans uppercase mb-2 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                        Koleksiyon
                                    </span>
                                    <h3 className="font-serif text-3xl md:text-5xl text-white uppercase tracking-widest relative inline-block">
                                        {categories[0].name}
                                        <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Link href={categories[1].href}>
                            <div className="group relative h-[450px] overflow-hidden bg-stone-200">
                                <Image
                                    src={categories[1].image}
                                    alt={categories[1].name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                                <div className="absolute inset-0 flex flex-col justify-end p-10">
                                    <span className="text-stone-300 text-xs tracking-[0.3em] font-sans uppercase mb-2 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                        Koleksiyon
                                    </span>
                                    <h3 className="font-serif text-2xl md:text-3xl text-white uppercase tracking-widest relative inline-block">
                                        {categories[1].name}
                                        <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Second Row - 3 equal items */}
                    {categories.slice(2).map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index + 2) * 0.1 }}
                        >
                            <Link href={category.href}>
                                <div className="group relative h-[450px] overflow-hidden bg-stone-200">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-10">
                                        <span className="text-stone-300 text-xs tracking-[0.3em] font-sans uppercase mb-2 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                            Koleksiyon
                                        </span>
                                        <h3 className="font-serif text-2xl md:text-3xl text-white uppercase tracking-widest relative inline-block">
                                            {category.name}
                                            <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
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
