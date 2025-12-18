
import { client, urlFor } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import ProductGallery from '@/components/ProductGallery'
import ProductDetails from '@/components/ProductDetails'
import type { Metadata } from 'next'

interface Product {
    _id: string
    title: string
    slug: { current: string }
    images: any[]
    description?: string
    price?: number
    dimensions?: {
        width?: number
        height?: number
        depth?: number
    }
    fabricType?: string
    material?: string
    category?: {
        name: string
    }
}

async function getProduct(slug: string): Promise<Product> {
    const query = `* [_type == "product" && slug.current == $slug][0]{
    _id,
        title,
        slug,
        images,
        description,
        price,
        dimensions,
        fabricType,
        material,
        category -> {
            name
        }
} `

    const product = await client.fetch(query, { slug })

    if (!product) {
        notFound()
    }

    return product
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    try {
        const product = await getProduct(params.slug)
        return {
            title: `${product.title} | Yorgancıoğlu`,
            description: product.description || `${product.title} - Lüks mobilya ve ev dekorasyonu`,
        }
    } catch {
        return {
            title: 'Ürün | Yorgancıoğlu',
        }
    }
}

export default async function ProductPage({
    params,
}: {
    params: { slug: string }
}) {
    const product = await getProduct(params.slug)

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        image: (product.images?.find((img: any) => img.isCover) || product.images?.[0]) || undefined, // Note: You'd ideally resolve this to a full URL
        description: product.description,
        brand: {
            '@type': 'Brand',
            name: 'Yorgancıoğlu',
        },
        offers: {
            '@type': 'Offer',
            url: `https://yorgancioglu.com.tr/product/${product.slug.current}`,
            priceCurrency: 'TRY',
            price: product.price,
            availability: 'https://schema.org/InStock',
        },
    }

    return (
        <div className="min-h-screen bg-stone-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Main Product Section */}
            <div className="pt-20 pb-24 lg:pt-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Left: Media Gallery */}
                        <div>
                            <ProductGallery
                                images={product.images}
                                productName={product.title}
                            />
                        </div>

                        {/* Right: Info Panel */}
                        <div>
                            <ProductDetails
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                dimensions={product.dimensions}
                                fabricType={product.fabricType}
                                material={product.material}
                                category={product.category?.name}
                            />
                        </div>
                    </div>

                    {/* Related Products Section */}
                    <div className="mt-32 border-t border-stone-200 pt-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-12 text-balance text-center">İlginizi Çekebilecek Diğer Ürünler</h2>
                        {/* Ideally fetch real related products here. For now we can use a server component or just placeholder if complex.
                           But since this is a server component, I can fetch them! */}
                        <RelatedProducts currentSlug={params.slug} categoryName={product.category?.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}

async function RelatedProducts({ currentSlug, categoryName }: { currentSlug: string, categoryName?: string }) {
    // Fetch 4 random products, preferably from same category
    const query = `*[_type == "product" && slug.current != $slug][0...4]{
        _id,
        title,
        slug,
        images,
        price
    }`
    // If we had category ID we could filter by it. For now random is fine or just latest.
    const products = await client.fetch(query, { slug: currentSlug })

    if (!products.length) return null

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((product: any) => (
                <a key={product._id} href={`/product/${product.slug.current}`} className="group block space-y-4">
                    <div className="bg-stone-100 aspect-square overflow-hidden relative rounded-sm">
                        {product.images?.[0] && (
                            <img
                                src={urlFor(product.images[0]).width(600).height(600).url()}
                                alt={product.title}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                        )}
                    </div>
                    <div className="space-y-1 text-center">
                        <h3 className="font-serif text-lg text-stone-900 group-hover:text-stone-600 transition-colors">{product.title}</h3>
                        {/* Optional price display */}
                        {/* <p className="text-sm text-stone-500">{product.price} TL</p> */}
                    </div>
                </a>
            ))}
        </div>
    )
}

