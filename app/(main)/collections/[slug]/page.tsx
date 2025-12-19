import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { urlFor } from '@/sanity/lib/client'

// Revalidate page every minute
export const revalidate = 60

interface Product {
    _id: string
    title: string
    slug: { current: string }
    images: any[]
    description?: string
    price?: number
}

interface Category {
    name: string
    description?: string
}

async function getCategory(slug: string): Promise<Category | null> {
    const query = `*[_type == "collection" && slug.current == $slug][0]{
        name,
        description
    }`
    return await client.fetch(query, { slug })
}

async function getProductsByCategory(slug: string): Promise<Product[]> {
    const query = `*[_type == "product" && category->slug.current == $slug] | order(_createdAt desc) {
    _id,
    title,
    slug,
    images,
    description,
    price
  }`

    return await client.fetch(query, { slug })
}

export default async function CategoryPage({
    params,
}: {
    params: { slug: string }
}) {
    // 1. Fetch Category Details to ensure it exists and get dynamic title
    const category = await getCategory(params.slug)

    if (!category) {
        // If category doesn't exist in Sanity, return 404
        return notFound()
    }

    // 2. Fetch Products
    const products = await getProductsByCategory(params.slug)

    return (
        <div className="min-h-screen bg-stone-50 pt-32 pb-24">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center mb-20 space-y-4">
                    <h1 className="font-serif text-5xl md:text-7xl font-medium text-stone-900 leading-tight">
                        {category.name}
                    </h1>
                    {category.description && (
                        <p className="font-sans text-stone-600 text-lg max-w-2xl mx-auto">
                            {category.description}
                        </p>
                    )}
                    <p className="font-sans text-stone-500 text-sm tracking-wide">
                        {products.length} ürün listeleniyor
                    </p>
                </div>

                {/* Products Grid */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {products.map((product) => {
                            // Logic to resolve the main image (Cover > First Image)
                            const mainImage = product.images?.find((img: any) => img.isCover) || product.images?.[0]

                            return (
                                <Link
                                    key={product._id}
                                    href={`/product/${product.slug.current}`}
                                    className="group block"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 mb-6 rounded-sm">
                                        {mainImage ? (
                                            <img
                                                src={urlFor(mainImage).width(800).height(1000).url()}
                                                alt={product.title}
                                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-stone-400">Görsel Yok</div>
                                        )}
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Product Info */}
                                    <div className="text-center space-y-2">
                                        <h3 className="font-serif text-2xl text-stone-900 group-hover:text-stone-600 transition-colors">
                                            {product.title}
                                        </h3>
                                        {/* Optional Price */}
                                        {/*
                                        <p className="font-sans text-stone-900 font-medium">
                                            {product.price ? `${product.price.toLocaleString('tr-TR')} ₺` : 'Fiyat Sorunuz'}
                                        </p>
                                        */}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                ) : (
                    <div className="text-center py-32 border border-dashed border-stone-300 rounded-lg">
                        <p className="font-serif text-2xl text-stone-400 mb-6">
                            Bu koleksiyonda henüz ürün bulunmuyor.
                        </p>
                        <Link
                            href="/"
                            className="inline-block border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 py-3 uppercase tracking-wider text-sm font-semibold transition-all duration-300"
                        >
                            Ana Sayfaya Dön
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
