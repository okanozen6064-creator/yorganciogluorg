'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Heart, Truck, Shield } from 'lucide-react'

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
    const [openAccordion, setOpenAccordion] = useState<string | null>('dimensions')
    const [isWishlisted, setIsWishlisted] = useState(false)

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id)
    }

    return (
        <div className="lg:sticky lg:top-8 h-fit space-y-8">
            {/* Breadcrumb - Moved here from Page for layout cohesion */}
            <div className="flex items-center gap-2 text-sm text-stone-500 font-medium">
                <Link href="/" className="hover:text-stone-900 transition-colors">Ana Sayfa</Link>
                <span>/</span>
                {category ? (
                    <>
                        <Link href="/collections" className="hover:text-stone-900 transition-colors">{category}</Link>
                        <span>/</span>
                    </>
                ) : (
                    <>
                        <Link href="/collections" className="hover:text-stone-900 transition-colors">Koleksiyonlar</Link>
                        <span>/</span>
                    </>
                )}
                <span className="text-stone-900">{title}</span>
            </div>

            <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                    <h1 className="font-serif text-4xl md:text-5xl text-balance leading-tight text-stone-900">
                        {title}
                    </h1>
                    <button
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                        aria-label="Favorilere ekle"
                    >
                        <Heart className={`w-6 h-6 ${isWishlisted ? "fill-stone-900 text-stone-900" : "text-stone-900"}`} />
                    </button>
                </div>

                {/* Description */}
                {description ? (
                    <p className="font-sans text-stone-600 leading-relaxed text-lg max-w-prose">
                        {description}
                    </p>
                ) : (
                    <p className="font-sans text-stone-600 leading-relaxed text-lg max-w-prose">
                        Modern tasarım anlayışı ile üretilen {title}, evinizde şıklığı ve konforu bir araya getiriyor.
                    </p>
                )}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4">
                <a
                    href={`https://wa.me/905449404910?text=Merhaba, ${title} ürünü hakkında randevu oluşturmak istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center h-14 bg-stone-900 hover:bg-stone-800 text-stone-50 font-light tracking-wide transition-colors"
                >
                    RANDEVU OLUŞTUR
                </a>
                <a
                    href={`https://wa.me/905449404910?text=Merhaba, ${title} ürünü hakkında detaylı bilgi almak istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center h-14 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50 font-light tracking-wide transition-all bg-transparent"
                >
                    BİLGİ AL
                </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-200">
                <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-stone-500 mt-0.5" />
                    <div>
                        <div className="text-sm font-medium text-stone-900">Ücretsiz Teslimat</div>
                        <div className="text-xs text-stone-500">Antalya içi nakliye</div>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-stone-500 mt-0.5" />
                    <div>
                        <div className="text-sm font-medium text-stone-900">2 Yıl Garanti</div>
                        <div className="text-xs text-stone-500">Üretim hatalarına karşı</div>
                    </div>
                </div>
            </div>

            {/* Accordions - Technical Details */}
            <div className="pt-8 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                    <h2 className="font-serif text-2xl text-stone-900">Teknik Detaylar</h2>
                </div>

                <div className="w-full">
                    {/* Dimensions */}
                    {dimensions && (dimensions.width || dimensions.height || dimensions.depth) && (
                        <div className="border-b border-stone-200">
                            <button
                                onClick={() => toggleAccordion('dimensions')}
                                className="w-full flex items-center justify-between py-4 text-left group"
                            >
                                <span className="text-sm font-medium text-stone-900 group-hover:text-stone-700 transition-colors">Ölçüler</span>
                                <ChevronDown
                                    className={`w-4 h-4 text-stone-500 transition-transform duration-300 ${openAccordion === 'dimensions' ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div className={`grid transition-all duration-300 ease-in-out ${openAccordion === 'dimensions' ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden space-y-2 text-stone-600 text-sm">
                                    {dimensions.width && <div className="flex justify-between"><span className="text-stone-500">Genişlik</span><span>{dimensions.width} cm</span></div>}
                                    {dimensions.height && <div className="flex justify-between"><span className="text-stone-500">Yükseklik</span><span>{dimensions.height} cm</span></div>}
                                    {dimensions.depth && <div className="flex justify-between"><span className="text-stone-500">Derinlik</span><span>{dimensions.depth} cm</span></div>}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Materials */}
                    <div className="border-b border-stone-200">
                        <button
                            onClick={() => toggleAccordion('materials')}
                            className="w-full flex items-center justify-between py-4 text-left group"
                        >
                            <span className="text-sm font-medium text-stone-900 group-hover:text-stone-700 transition-colors">Malzeme & Bakım</span>
                            <ChevronDown
                                className={`w-4 h-4 text-stone-500 transition-transform duration-300 ${openAccordion === 'materials' ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <div className={`grid transition-all duration-300 ease-in-out ${openAccordion === 'materials' ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden space-y-2 text-stone-600 text-sm leading-relaxed">
                                {fabricType && <p><span className="font-medium text-stone-900">Kumaş:</span> {fabricType}</p>}
                                {material && <p><span className="font-medium text-stone-900">İskelet:</span> {material}</p>}
                                <p>Nemli bez ile silinebilir. Doğrudan güneş ışığından koruyunuz.</p>
                            </div>
                        </div>
                    </div>

                    {/* Delivery */}
                    <div className="border-b border-stone-200">
                        <button
                            onClick={() => toggleAccordion('delivery')}
                            className="w-full flex items-center justify-between py-4 text-left group"
                        >
                            <span className="text-sm font-medium text-stone-900 group-hover:text-stone-700 transition-colors">Teslimat Bilgisi</span>
                            <ChevronDown
                                className={`w-4 h-4 text-stone-500 transition-transform duration-300 ${openAccordion === 'delivery' ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <div className={`grid transition-all duration-300 ease-in-out ${openAccordion === 'delivery' ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden space-y-2 text-stone-600 text-sm leading-relaxed">
                                <p>Siparişiniz üzerine özel olarak üretilmektedir. Teslimat süresi ortalama 15-20 iş günüdür. Antalya içi teslimat ve kurulum ekibimiz tarafından ücretsiz yapılmaktadır.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
