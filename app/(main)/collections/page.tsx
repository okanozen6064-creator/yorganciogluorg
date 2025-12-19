import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Koleksiyonlar | Yorgancıoğlu',
    description: 'Tüm mobilya koleksiyonlarımızı keşfedin.',
}

interface Collection {
    _id: string
    name: string
    slug: { current: string }
    description?: string
    image?: any
}

async function getCollections(): Promise<Collection[]> {
    const query = `*[_type == "collection"]{
    _id,
    name,
    slug,
    description,
    image
  }`

    return await client.fetch(query)
}

interface Product {
    _id: string
    title: string
    slug: { current: string }
    images: any[]
    description?: string
}

async function getAllProducts(): Promise<Product[]> {
    const query = `*[_type == "product"]{
    _id,
    title,
    slug,
    images,
    description
  }`

    return await client.fetch(query)
}

export default async function CollectionsPage() {
    const collections = await getCollections()
    const allProducts = await getAllProducts()

    return (
        <div className="min-h-screen bg-stone-50 pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center mb-20">
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 uppercase tracking-widest mb-4">
                        Koleksiyonlar
                    </h1>
                    <p className="font-sans text-stone-600 text-lg tracking-wide">
                        Tüm mobilya koleksiyonlarımızı keşfedin
                    </p>
                </div>

                {/* Collections List (if any) */}
                {collections.length > 0 && (
                    <div className="mb-24">
                        <h2 className="font-serif text-3xl font-bold text-stone-900 uppercase tracking-wider mb-12">
                            Kategoriler
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {collections.map((collection) => (
                                <Link
                                    key={collection._id}
                                    href={`/collections/${collection.slug.current}`}
                                    className="group"
                                >
                                    <div className="relative h-[300px] overflow-hidden bg-stone-200 mb-4">
                                        {collection.image && (
                                            <Image
                                                src={urlFor(collection.image).width(600).height(400).url()}
                                                alt={collection.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        <div className="absolute inset-0 flex items-end justify-center p-6">
                                            <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-widest group-hover:underline underline-offset-8 transition-all duration-300">
                                                {collection.name}
                                            </h3>
                                        </div>
                                    </div>
                                    {collection.description && (
                                        <p className="font-sans text-stone-600 text-sm tracking-wide">
                                            {collection.description}
                                        </p>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* All Products */}
                <div>
                    <h2 className="font-serif text-3xl font-bold text-stone-900 uppercase tracking-wider mb-12">
                        Tüm Ürünler
                    </h2>
                    {allProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {allProducts.map((product) => (
                                <Link
                                    key={product._id}
                                    href={`/product/${product.slug.current}`}
                                    className="group"
                                >
                                    <div className="relative aspect-square overflow-hidden bg-stone-200 mb-4">
                                        {product.images && product.images[0] && (
                                            <Image
                                                src={urlFor(product.images[0]).width(600).height(600).url()}
                                                alt={product.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        )}
                                    </div>
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
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="font-sans text-stone-600 text-lg mb-8">
                                Henüz ürün eklenmemiş. Lütfen Sanity Studio'da ürün ekleyin.
                            </p>
                            <a
                                href="/studio"
                                className="inline-block border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 py-3 uppercase tracking-wider text-sm font-semibold transition-all duration-300"
                            >
                                Studio'ya Git
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
