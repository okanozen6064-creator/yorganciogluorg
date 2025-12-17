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
        <section className="py-32 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 uppercase tracking-widest mb-4">
                        Öne Çıkan Ürünler
                    </h2>
                    <p className="font-sans text-stone-600 text-lg tracking-wide">
                        En beğenilen mobilya koleksiyonlarımız
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/product/${product.slug.current}`}>
                                <div className="group">
                                    {/* Image */}
                                    <div className="relative aspect-square overflow-hidden bg-stone-200 mb-4">
                                        {product.images && product.images[0] && (
                                            <Image
                                                src={urlFor(product.images[0]).width(1000).height(1000).quality(100).url()}
                                                alt={product.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                quality={90}
                                            />
                                        )}
                                    </div>

                                    {/* Product Info - Minimal */}
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-stone-900 uppercase tracking-wider mb-2 group-hover:text-stone-600 transition-colors">
                                            {product.title}
                                        </h3>
                                        {product.description && (
                                            <p className="font-sans text-stone-600 text-sm line-clamp-2 tracking-wide">
                                                {product.description}
                                            </p>
                                        )}
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
