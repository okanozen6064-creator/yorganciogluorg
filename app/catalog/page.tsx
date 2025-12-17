import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Katalog | Yorgancıoğlu',
    description: 'Yorgancıoğlu Mobilya 2024 Koleksiyon Kataloğu.',
}

export default function CatalogPage() {
    return (
        <div className="min-h-screen bg-stone-950 text-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-8 text-center">
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 uppercase tracking-widest text-[#D4AF37]">
                    Katalog
                </h1>
                <p className="font-sans text-xl text-stone-400 mb-12 max-w-2xl mx-auto tracking-wide">
                    2024 Koleksiyonumuzun yer aldığı dijital kataloğumuz hazırlanmaktadır. Çok yakında buradan ulaşabilirsiniz.
                </p>

                <div className="relative w-full max-w-4xl mx-auto aspect-video bg-stone-900 rounded-lg overflow-hidden border border-stone-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-2xl text-stone-600 uppercase tracking-widest">
                            Çok Yakında
                        </span>
                    </div>
                </div>

                <div className="mt-12">
                    <Link
                        href="/collections"
                        className="inline-block border border-white/30 hover:border-white hover:bg-white hover:text-stone-900 text-white font-semibold px-10 py-4 uppercase tracking-wider text-sm transition-all duration-300"
                    >
                        Koleksiyonları İncele
                    </Link>
                </div>
            </div>
        </div>
    )
}
