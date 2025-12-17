import { Metadata } from 'next'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Shield, Award, Users, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Hakkımızda | Yorgancıoğlu',
    description: '1985'ten beri lüks mobilya üretiminde öncü.Kalite, tasarım ve müşteri memnuniyeti odaklı çalışmalarımız.',
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Video */}
            <div className="relative h-[70vh] bg-stone-900">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/videos/hakkimizda.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="relative h-full flex items-center justify-center text-center px-8">
                    <div className="max-w-4xl">
                        <h1 className="font-serif text-6xl md:text-7xl font-bold text-white uppercase tracking-widest mb-6">
                            Hikayemiz
                        </h1>
                        <p className="font-sans text-xl md:text-2xl text-white/90 tracking-wide">
                            1985'ten beri hayallerinizi gerçeğe dönüştürüyoruz
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-8 py-32">
                {/* Story Section */}
                <div className="prose prose-stone max-w-none mb-24">
                    <h2 className="font-serif text-4xl font-bold text-stone-900 uppercase tracking-wider mb-8">
                        40 Yıllık Mükemmellik Yolculuğu
                    </h2>
                    <p className="font-sans text-lg text-stone-700 leading-relaxed mb-6">
                        Yorgancıoğlu Mobilya, 1985 yılında Antalya'da kurulduğu günden bu yana,
                        lüks mobilya sektöründe kalite ve tasarımın simgesi olmuştur. Dört nesil
                        boyunca süren tutku ve özveriyle, evleri yalnızca yaşam alanları değil,
                        sanat eserleri haline getiriyoruz.
                    </p>
                    <p className="font-sans text-lg text-stone-700 leading-relaxed mb-6">
                        Her bir ürünümüz, geleneksel ustalık ile modern tasarımın kusursuz
                        birleşimidir. Seçkin malzemeler, titiz işçilik ve zamansız estetik
                        anlayışımız, mobilyalarımızı sadece fonksiyonel değil, aynı zamanda
                        nesiller boyu kalıcı değerler haline getirir.
                    </p>
                    <p className="font-sans text-lg text-stone-700 leading-relaxed">
                        Bugün, binlerce mutlu aile ile kurduğumuz güvenle, Türkiye'nin önde
                        gelen lüks mobilya markalarından biri olmanın gururunu yaşıyoruz.
                        Her projede aynı özveri, her müşteride aynı mükemmellik anlayışı.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <Shield className="w-12 h-12 text-stone-700" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-stone-900 uppercase tracking-wider mb-3">
                                Kalite Garantisi
                            </h3>
                            <p className="font-sans text-stone-700 leading-relaxed">
                                Her ürünümüz, 2 yıl garanti ile desteklenen en yüksek kalite
                                standartlarında üretilir. Sürdürülebilir malzemeler ve çevre dostu üretim.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <Award className="w-12 h-12 text-stone-700" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-stone-900 uppercase tracking-wider mb-3">
                                Ödüllü Tasarımlar
                            </h3>
                            <p className="font-sans text-stone-700 leading-relaxed">
                                Ulusal ve uluslararası tasarım yarışmalarında ödüle layık görülen
                                koleksiyonlarımız, sektörde fark yaratıyor.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <Users className="w-12 h-12 text-stone-700" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-stone-900 uppercase tracking-wider mb-3">
                                Uzman Ekip
                            </h3>
                            <p className="font-sans text-stone-700 leading-relaxed">
                                Alanında uzman tasarımcılar ve ustabaşlar ile, hayalinizdeki
                                mekânı birlikte tasarlıyoruz.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex-shrink-0">
                            <Sparkles className="w-12 h-12 text-stone-700" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-stone-900 uppercase tracking-wider mb-3">
                                Özel Tasarım
                            </h3>
                            <p className="font-sans text-stone-700 leading-relaxed">
                                Size özel ölçü ve tasarım hizmeti ile, evinize tam uyum sağlayan
                                mobilyalar üretiyoruz.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center py-16 border-t border-stone-200">
                    <h3 className="font-serif text-3xl font-bold text-stone-900 uppercase tracking-wider mb-6">
                        Hayalinizdeki Evi Birlikte Yaratalım
                    </h3>
                    <p className="font-sans text-lg text-stone-700 mb-8">
                        Ücretsiz keşif görüşmesi için hemen iletişime geçin.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block border-2 border-stone-900 hover:bg-stone-900 hover:text-white text-stone-900 px-12 py-4 font-semibold uppercase tracking-wider text-sm transition-all duration-300"
                    >
                        İletişime Geçin
                    </a>
                </div>
            </div>
        </div>
    )
}
