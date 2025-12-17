import { client } from '@/sanity/lib/client'
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
    const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    images,
    description,
    price,
    dimensions,
    fabricType,
    material,
    category->{
      name
    }
  }`

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
        image: product.images?.[0] ? product.images[0] : undefined, // Note: You'd ideally resolve this to a full URL
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
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Main Product Section - Lazzoni Style */}
            <div className="pt-20 lg:pt-24">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Left: Media Gallery (65%) */}
                        <div className="lg:col-span-8">
                            <ProductGallery
                                images={product.images}
                                productName={product.title}
                            />
                        </div>

                        {/* Right: Sticky Info Panel (35%) */}
                        <div className="lg:col-span-4">
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
                </div>
            </div>

            {/* Mobile Sticky Add to Cart Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-4 z-40">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-sm text-stone-600">Fiyat</p>
                        <p className="text-xl font-bold text-stone-900">
                            {product.price
                                ? new Intl.NumberFormat('tr-TR', {
                                    style: 'currency',
                                    currency: 'TRY',
                                    minimumFractionDigits: 0,
                                }).format(product.price)
                                : 'İletişime geçin'
                            }
                        </p>
                    </div>
                    <a
                        href={`https://wa.me/905449404910?text=Merhaba, ${product.title} ürünü hakkında bilgi almak istiyorum.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-stone-900 hover:bg-stone-800 text-white text-center font-semibold py-3 px-6 uppercase tracking-wider text-sm transition-colors"
                    >
                        Randevu Al
                    </a>
                </div>
            </div>
        </div>
    )
}
