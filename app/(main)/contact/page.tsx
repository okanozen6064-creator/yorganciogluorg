
'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, Send, AlertCircle, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        // Honeypot field - should be left empty by humans
        website: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Honeypot check
        if (formData.website) {
            // Spam detected - fake success
            setStatus('success')
            return
        }

        setIsLoading(true)
        setStatus('idle')

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error')
            setIsLoading(false)
            return
        }

        // Simulate API delay
        setTimeout(() => {
            setIsLoading(false)
            setStatus('success')
            setFormData({ name: '', email: '', phone: '', message: '', website: '' })
        }, 1500)
    }

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
                                        <p className="font-sans text-stone-600 text-lg leading-relaxed">
                                            Sütçüler Mah. Şehit Astsubay Ömer Halisdemir Cad. No: 32, (Kepez Devlet Hastanesi Batı Kısmı) Kepez / Antalya
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
                                        <a href="mailto:07yorgancioglumobilya@gmail.com" className="font-sans text-stone-600 hover:text-stone-900 transition-colors">
                                            07yorgancioglumobilya@gmail.com
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
                                            Pazar: 13:00 - 19:00
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
                                className="inline-block w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-center font-semibold py-4 px-8 uppercase tracking-wider text-sm transition-colors duration-200 min-h-[48px] flex items-center justify-center"
                            >
                                WhatsApp'tan Yazın
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-stone-50 p-8 lg:p-12 border border-stone-200">
                        <h2 className="font-serif text-3xl font-bold text-stone-900 uppercase tracking-wider mb-8">
                            Bize Ulaşın
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Honeypot Field (Hidden) */}
                            <div className="hidden opacity-0 h-0 w-0 overflow-hidden">
                                <label htmlFor="website">Website</label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Ad Soyad *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-all placeholder:text-stone-400 min-h-[48px]"
                                    placeholder="Adınız Soyadınız"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">E-posta *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-all placeholder:text-stone-400 min-h-[48px]"
                                        placeholder="ornek@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Telefon</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-all placeholder:text-stone-400 min-h-[48px]"
                                        placeholder="05XX XXX XX XX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Mesajınız *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-all placeholder:text-stone-400 resize-none"
                                    placeholder="Bize iletmek istediğiniz mesaj..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-stone-900 text-white py-4 px-8 uppercase tracking-widest text-sm font-medium hover:bg-[#D4AF37] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px]"
                            >
                                {isLoading ? (
                                    'Gönderiliyor...'
                                ) : (
                                    <>
                                        Gönder <Send className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Status Messages */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-6 p-4 bg-green-50 text-green-800 border border-green-200 flex items-center gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-sm">Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız.</p>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-6 p-4 bg-red-50 text-red-800 border border-red-200 flex items-center gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-sm">Mesaj gönderilemedi. Lütfen tüm alanları doldurup tekrar deneyin.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}
