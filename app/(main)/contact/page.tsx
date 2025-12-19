import { Metadata } from 'next'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
    title: 'İletişim | Yorgancıoğlu',
    description: 'Yorgancıoğlu Mobilya ile iletişime geçin. Showroom ziyareti, tasarım danışmanlığı ve fiyat teklifi için bize ulaşın.',
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-24">
            <div className="max-w-7xl mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 uppercase tracking-widest mb-6">
                        İletişim
                    </h1>
                    <p className="font-sans text-lg text-stone-600 max-w-2xl mx-auto tracking-wide">
                        Hayalinizdeki mobilyalar için bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmak için hazır.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-stone-900 uppercase tracking-wider mb-8">
                                İletişim Bilgilerimiz
                            </h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-stone-700" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-stone-900 mb-2">Adres</h3>
                                        <p className="font-sans text-stone-600 leading-relaxed">
                                            Örnek Mahalle, Mobilya Sokak No: 15<br />
                                            Muratpaşa, Antalya
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <Phone className="w-6 h-6 text-stone-700" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-stone-900 mb-2">Telefon</h3>
                                        <a href="tel:+905449404910" className="font-sans text-stone-600 hover:text-stone-900 transition-colors">
                                            +90 544 940 49 10
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <Mail className="w-6 h-6 text-stone-700" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-stone-900 mb-2">E-posta</h3>
                                        <a href="mailto:info@yorgancioglu.com" className="font-sans text-stone-600 hover:text-stone-900 transition-colors">
                                            info@yorgancioglu.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <Clock className="w-6 h-6 text-stone-700" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-stone-900 mb-2">Çalışma Saatleri</h3>
                                        <p className="font-sans text-stone-600 leading-relaxed">
                                            Pazartesi - Cumartesi: 09:00 - 19:00<br />
                                            Pazar: 10:00 - 18:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="bg-stone-50 p-8 border border-stone-200">
                            <h3 className="font-serif text-2 xl font-bold text-stone-900 uppercase tracking-wider mb-4">
                                Hızlı İletişim
                            </h3>
                            <p className="font-sans text-stone-600 mb-6">
                                WhatsApp üzerinden anında bizimle iletişime geçin.
                            </p>
                            <a
                                href="https://wa.me/905449404910?text=Merhaba, bilgi almak istiyorum."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-center font-semibold py-4 px-8 uppercase tracking-wider text-sm transition-colors duration-200"
                            >
                                WhatsApp'tan Yazın
                            </a>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="h-[600px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.7102816692536!2d30.72092707569399!3d36.93118897221006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3871dc516b59d%3A0x1754bae6967466bf!2sYorganc%C4%B1o%C4%9Flu%20mobilya!5e1!3m2!1str!2str!4v1765979253471!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
