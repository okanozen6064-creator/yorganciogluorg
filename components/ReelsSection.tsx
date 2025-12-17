'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const reels = [
    { id: 1, src: '/videos/reel1.mp4' },
    { id: 2, src: '/videos/reel2.mp4' },
    { id: 3, src: '/videos/reel3.mp4' },
]

export default function ReelsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
                        Ürünlerimizi Keşfedin
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Mobilyalarımızın detaylı görüntüleri
                    </p>
                </motion.div>

                <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {reels.map((reel, index) => (
                        <motion.div
                            key={reel.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-shrink-0 w-[300px] snap-center"
                        >
                            <div className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-xl">
                                <video
                                    src={reel.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    )
}
