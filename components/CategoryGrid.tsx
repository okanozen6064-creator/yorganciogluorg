'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { urlFor } from '@/sanity/lib/client'

interface Collection {
    _id: string
    name: string
    slug: { current: string }
    image: any
    description?: string
}

interface CategoryGridProps {
    collections?: Collection[]
}

export default function CategoryGrid({ collections = [] }: CategoryGridProps) {
    if (!collections.length) return null

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
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection._id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <Link href={`/collections/${collection.slug.current}`} className="group block h-full">
                                {/* Image Container - Framed Style (Smaller Image) */}
                                <div className="relative overflow-hidden aspect-[4/5] bg-stone-200 mb-6">
                                    <div className="absolute inset-0 bg-stone-300 animate-pulse" /> {/* Placeholder loading */}
                                    {collection.image && (
                                        <Image
                                            src={urlFor(collection.image).width(800).height(1000).url()}
                                            alt={collection.name}
                                            fill
                                            className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-[0.2]"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    )}
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
                                        {collection.name}
                                    </h3>
                                    {collection.description && (
                                        <p className="font-sans text-stone-500 text-sm tracking-wide group-hover:text-stone-800 transition-colors">
                                            {collection.description}
                                        </p>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
