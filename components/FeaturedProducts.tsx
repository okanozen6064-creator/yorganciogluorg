'use client'

import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { motion } from 'framer-motion'

interface Product {
    _id: string
    title: string
    slug: { current: string }
    images: any[]
    description?: string
}

interface FeaturedProductsProps {
    products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
                        Öne Çıkan Koleksiyonlar
                    </h2>
                    <p className="text-gray-600 text-lg">
                        En beğenilen mobilya koleksiyonlarımız
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/product/${product.slug.current}`}>
                                <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                    {/* Image */}
                                    <div className="relative aspect-square overflow-hidden">
                                        {product.images && product.images[0] && (
                                            <Image
                                                src={urlFor(product.images[0]).width(600).height(600).url()}
                                                alt={product.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        )}
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-gold transition-colors">
                                            {product.title}
                                        </h3>
                                        {product.description && (
                                            <p className="text-gray-600 line-clamp-2">
                                                {product.description}
                                            </p>
                                        )}
                                        <div className="mt-4 flex items-center text-brand-gold font-semibold">
                                            <span className="group-hover:translate-x-2 transition-transform duration-200">
                                                Detayları Görüntüle →
                                            </span>
                                        </div>
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
