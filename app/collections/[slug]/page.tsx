import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'

interface Product {
    _id: string
    title: string
    slug: { current: string }
    images: any[]
    description?: string
}

async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
    const query = `*[_type == "product" && category->slug.current == $categorySlug]{
    _id,
    title,
    slug,
    images,
    description
  }`

    return await client.fetch(query, { categorySlug })
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

const categoryTitles: Record<string, string> = {
    'koltuk-takimlari': 'Koltuk Takımları',
    'yatak-odasi': 'Yatak Odası',
    'yemek-odasi': 'Yemek Odası',
    'oturma-gruplari': 'Oturma Grupları',
    'ozel-tasarim': 'Özel Tasarım',
}

export default async function CategoryPage({
    params,
}: {
    params: { slug: string }
}) {
    const categoryTitle = categoryTitles[params.slug] || 'Koleksiyon'

    // Kategori varsa o kategoriye ait ürünleri, yoksa tüm ürünleri göster
    let products: Product[] = []

    try {
        products = await getProductsByCategory(params.slug)
        // Eğer kategori için ürün yoksa tüm ürünleri göster
        if (products.length === 0) {
            products = await getAllProducts()
        }
    } catch (error) {
        products = await getAllProducts()
    }

    return (
        <div className="min-h-screen bg-stone-50 pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center mb-20">
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 uppercase tracking-widest mb-4">
                        {categoryTitle}
                    </h1>
                    <p className="font-sans text-stone-600 text-lg tracking-wide">
                        {products.length} ürün bulundu
                    </p>
                </div>

                {/* Products Grid */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product._id}
                                href={`/product/${product.slug.current}`}
                                className="group"
                            >
                                {/* Image */}
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

                                {/* Product Info */}
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
                            Bu kategoride henüz ürün bulunmuyor.
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
