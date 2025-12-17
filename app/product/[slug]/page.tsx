import { notFound } from 'next/navigation'
import Image from 'next/image'
import { client, urlFor } from '@/sanity/lib/client'
import { Metadata } from 'next'

interface Product {
    _id: string
    title: string
    slug: { current: string }
    images: any[]
    description: string
    dimensions?: {
        width?: number
        height?: number
        depth?: number
    }
    fabricType?: string
    material?: string
}

// Fetch product data
async function getProduct(slug: string): Promise<Product | null> {
    const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    images,
    description,
    dimensions,
    fabricType,
    material
  }`

    return await client.fetch(query, { slug })
}

// Generate metadata for SEO
export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    const product = await getProduct(params.slug)

    if (!product) {
        return {
            title: 'Ürün Bulunamadı',
        }
    }

    return {
        title: `${product.title} | Yorgancıoğlu`,
        description: product.description || `${product.title} - Yorgancıoğlu Mobilya`,
    }
}

export default async function ProductPage({
    params,
}: {
    params: { slug: string }
}) {
    const product = await getProduct(params.slug)

    if (!product) {
        notFound()
    }

    const fabricTypeLabels: Record<string, string> = {
        kadife: 'Kadife',
        keten: 'Keten',
        deri: 'Deri',
        suet: 'Süet',
        pamuklu: 'Pamuklu',
        diger: 'Diğer',
    }

    const materialLabels: Record<string, string> = {
        ceviz: 'Ceviz',
        mese: 'Meşe',
        kayin: 'Kayın',
        metal: 'Metal',
        mermer: 'Mermer',
        mdf: 'MDF',
        diger: 'Diğer',
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Image Gallery */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                            {product.images && product.images[0] && (
                                <Image
                                    src={urlFor(product.images[0]).width(800).height(800).url()}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            )}
                        </div>

                        {/* Thumbnail Gallery */}
                        {product.images && product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-3">
                                {product.images.slice(1, 5).map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-square bg-white rounded-lg overflow-hidden shadow cursor-pointer hover:ring-2 hover:ring-brand-gold transition-all"
                                    >
                                        <Image
                                            src={urlFor(image).width(200).height(200).url()}
                                            alt={`${product.title} - ${index + 2}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Side - Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                {product.title}
                            </h1>
                            {product.description && (
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            )}
                        </div>

                        {/* Specifications Section */}
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">
                                Ürün Özellikleri
                            </h2>

                            <div className="space-y-3">
                                {/* Dimensions */}
                                {product.dimensions &&
                                    (product.dimensions.width ||
                                        product.dimensions.height ||
                                        product.dimensions.depth) && (
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="font-medium text-gray-700">Ölçüler:</span>
                                            <span className="text-gray-900">
                                                {product.dimensions.width && `${product.dimensions.width}cm (G)`}
                                                {product.dimensions.height && ` × ${product.dimensions.height}cm (Y)`}
                                                {product.dimensions.depth && ` × ${product.dimensions.depth}cm (D)`}
                                            </span>
                                        </div>
                                    )}

                                {/* Fabric Type */}
                                {product.fabricType && (
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-700">Kumaş Türü:</span>
                                        <span className="text-gray-900">
                                            {fabricTypeLabels[product.fabricType] || product.fabricType}
                                        </span>
                                    </div>
                                )}

                                {/* Material */}
                                {product.material && (
                                    <div className="flex justify-between py-2">
                                        <span className="font-medium text-gray-700">Malzeme:</span>
                                        <span className="text-gray-900">
                                            {materialLabels[product.material] || product.material}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Güven Rozetleri */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-brand-cream/50 rounded-lg p-4 text-center">
                                <div className="text-2xl mb-1">🛡️</div>
                                <p className="text-sm font-medium text-gray-700">2 Yıl Garanti</p>
                            </div>
                            <div className="bg-brand-cream/50 rounded-lg p-4 text-center">
                                <div className="text-2xl mb-1">🚚</div>
                                <p className="text-sm font-medium text-gray-700">Ücretsiz Kurulum</p>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="sticky top-24">
                            <a
                                href={`https://wa.me/905XXXXXXXXX?text=${encodeURIComponent(
                                    `Merhaba, ${product.title} ürünü hakkında bilgi almak istiyorum.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-center font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp'tan Fiyat Al
                                </span>
                            </a>

                            <p className="text-center text-sm text-gray-500 mt-3">
                                Size özel fiyat teklifi için hemen iletişime geçin
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
