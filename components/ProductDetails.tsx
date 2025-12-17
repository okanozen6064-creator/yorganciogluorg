'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ProductDetailsProps {
    title: string
    price?: number
    description?: string
    dimensions?: {
        width?: number
        height?: number
        depth?: number
    }
    fabricType?: string
    material?: string
    category?: string
}

export default function ProductDetails({
    title,
    price,
    description,
    dimensions,
    fabricType,
    material,
    category,
}: ProductDetailsProps) {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null)

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id)
    }

    const formatPrice = (price?: number) => {
        if (!price) return 'Fiyat için iletişime geçin'
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
        }).format(price)
    }

    return (
        <div className="lg:sticky lg:top-24 lg:h-fit space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-stone-600">
                <Link href="/" className="hover:text-stone-900">Ana Sayfa</Link>
                <span>/</span>
                {category && (
                    <>
                        <Link href="/collections" className="hover:text-stone-900">{category}</Link>
                        <span>/</span>
                    </>
                )}
                <span className="text-stone-900">{title}</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 uppercase tracking-wide">
                {title}
            </h1>

            {/* Price */}
            <div className="text-3xl font-bold text-stone-900">
                {formatPrice(price)}
            </div>

            {/* Description */}
            {description && (
                <p className="font-sans text-stone-700 leading-relaxed text-lg">
                    {description}
                </p>
            )}

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
                <a
                    href={`https://wa.me/905XXXXXXXXX?text=Merhaba, ${title} ürünü hakkında bilgi almak istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-stone-900 hover:bg-stone-800 text-white text-center font-semibold py-4 px-8 uppercase tracking-wider text-sm transition-colors duration-200"
                >
                    WhatsApp'tan Fiyat Al
                </a>
                <button className="w-full border-2 border-stone-900 hover:bg-stone-900 hover:text-white text-stone-900 text-center font-semibold py-4 px-8 uppercase tracking-wider text-sm transition-all duration-200">
                    Tasarımcıdan Randevu Al
                </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-stone-200 pt-6 space-y-2">
                {/* Dimensions */}
                {dimensions && (dimensions.width || dimensions.height || dimensions.depth) && (
                    <div className="border-b border-stone-200">
                        <button
                            onClick={() => toggleAccordion('dimensions')}
                            className="w-full flex items-center justify-between py-4 text-left"
                        >
                            <span className="font-semibold text-stone-900 uppercase tracking-wide text-sm">Ürün Ölçüleri</span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform ${openAccordion === 'dimensions' ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        {openAccordion === 'dimensions' && (
                            <div className="pb-4 space-y-2 text-stone-700">
                                {dimensions.width && <p>Genişlik: {dimensions.width} cm</p>}
                                {dimensions.height && <p>Yükseklik: {dimensions.height} cm</p>}
                                {dimensions.depth && <p>Derinlik: {dimensions.depth} cm</p>}
                            </div>
                        )}
                    </div>
                )}

                {/* Materials */}
                {(fabricType || material) && (
                    <div className="border-b border-stone-200">
                        <button
                            onClick={() => toggleAccordion('materials')}
                            className="w-full flex items-center justify-between py-4 text-left"
                        >
                            <span className="font-semibold text-stone-900 uppercase tracking-wide text-sm">Materyal Bigi</span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform ${openAccordion === 'materials' ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        {openAccordion === 'materials' && (
                            <div className="pb-4 space-y-2 text-stone-700">
                                {fabricType && <p>Kumaş: {fabricType}</p>}
                                {material && <p>Malzeme: {material}</p>}
                            </div>
                        )}
                    </div>
                )}

                {/* Delivery */}
                <div className="border-b border-stone-200">
                    <button
                        onClick={() => toggleAccordion('delivery')}
                        className="w-full flex items-center justify-between py-4 text-left"
                    >
                        <span className="font-semibold text-stone-900 uppercase tracking-wide text-sm">Teslimat & Kurulum</span>
                        <ChevronDown
                            className={`w-5 h-5 transition-transform ${openAccordion === 'delivery' ? 'rotate-180' : ''
                                }`}
                        />
                    </button>
                    {openAccordion === 'delivery' && (
                        <div className="pb-4 space-y-2 text-stone-700">
                            <p>✓ Ücretsiz teslimat ve kurulum</p>
                            <p>✓ Teslimat süresi: 15-20 iş günü</p>
                            <p>✓ Profesyonel montaj ekibi</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Trust Icons */}
            <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-stone-700" strokeWidth={1.5} />
                    <p className="text-xs text-stone-600">2 Yıl Garanti</p>
                </div>
                <div className="text-center">
                    <Truck className="w-8 h-8 mx-auto mb-2 text-stone-700" strokeWidth={1.5} />
                    <p className="text-xs text-stone-600">Ücretsiz Kurulum</p>
                </div>
                <div className="text-center">
                    <Ruler className="w-8 h-8 mx-auto mb-2 text-stone-700" strokeWidth={1.5} />
                    <p className="text-xs text-stone-600">Özel Ölçü</p>
                </div>
            </div>
        </div>
    )
}
