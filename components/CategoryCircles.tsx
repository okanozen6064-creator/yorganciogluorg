'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { urlFor } from '@/sanity/lib/client'

interface Collection {
    _id: string
    name: string
    slug: { current: string }
    image: any
}

interface CategoryCirclesProps {
    collections?: Collection[]
}

export default function CategoryCircles({ collections = [] }: CategoryCirclesProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    if (!collections.length) return null

    return (
        <section className="bg-white py-12 border-b border-stone-100">
            <div className="max-w-[1920px] mx-auto px-4 md:px-8">
                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto pb-4 pt-4 gap-4 md:gap-8 md:justify-center scrollbar-hide snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center flex-shrink-0 snap-center group cursor-pointer"
                        >
                            <Link href={`/collections/${collection.slug.current}`} className="flex flex-col items-center gap-3">
                                {/* Circle Image */}
                                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-1 border border-stone-200 group-hover:border-[#D4AF37] transition-colors duration-500">
                                    <div className="relative w-full h-full rounded-full overflow-hidden">
                                        {collection.image ? (
                                            <Image
                                                src={urlFor(collection.image).width(300).height(300).url()}
                                                alt={collection.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="160px"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-stone-100 flex items-center justify-center text-stone-300">
                                                <span>No Img</span>
                                            </div>
                                        )}
                                        {/* Golden Overlay on Hover */}
                                        <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>

                                {/* Text */}
                                <span className="font-serif text-stone-900 text-sm md:text-base tracking-wide font-medium group-hover:text-[#D4AF37] transition-colors duration-300">
                                    {collection.name}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
