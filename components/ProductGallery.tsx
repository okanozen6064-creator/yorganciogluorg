'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { urlFor } from '@/sanity/lib/client'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductGalleryProps {
    images: any[]
    productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
    // Sort images: Cover image first (if previously implemented, handled in parent or here)
    const sortedImages = [...(images || [])].sort((a, b) => Number(b.isCover || 0) - Number(a.isCover || 0))
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % sortedImages.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + sortedImages.length) % sortedImages.length)
    }

    if (!sortedImages.length) return null

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full bg-stone-100 rounded-sm overflow-hidden group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={urlFor(sortedImages[currentIndex]).width(2000).height(2000).quality(100).url()}
                            alt={`${productName} - Görsel ${currentIndex + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                            quality={100}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {sortedImages.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-sm"
                            aria-label="Önceki görsel"
                        >
                            <ChevronLeft className="w-5 h-5 text-stone-900" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-sm"
                            aria-label="Sonraki görsel"
                        >
                            <ChevronRight className="w-5 h-5 text-stone-900" />
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails Grid */}
            {sortedImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                    {sortedImages.map((image, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`relative aspect-square rounded-sm overflow-hidden border-2 transition-all duration-300 ${currentIndex === idx ? 'border-stone-900 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
                                }`}
                        >
                            <Image
                                src={urlFor(image).width(400).height(400).quality(90).url()}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
