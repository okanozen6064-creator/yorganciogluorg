'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-stone-950 text-stone-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-1">
                        <div className="mb-6">
                            <h2 className="font-cormorant text-5xl font-bold text-white tracking-tight mb-2">
                                Yorgancıoğlu
                            </h2>
                            <span className="font-serif text-sm tracking-[0.4em] text-stone-400 uppercase block pl-1">
                                mobilya
                            </span>
                        </div>
                        <p className="font-sans text-stone-400 leading-relaxed text-sm tracking-wide mb-6">
                            1985'ten beri lüks mobilya ve ev dekorasyonunda en iyisini sunuyoruz.
                        </p>

                        {/* Google Maps */}
                        <div className="mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.7102816692536!2d30.72092707569399!3d36.93118897221006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3871dc516b59d%3A0x1754bae6967466bf!2sYorganc%C4%B1o%C4%9Flu%20mobilya!5e1!3m2!1str!2str!4v1765979253471!5m2!1str!2str"
                                width="100%"
                                height="180"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded"
                            />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-serif text-lg font-bold text-stone-100 uppercase tracking-wider mb-6">
                            Hızlı Erişim
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/collections" className="font-sans text-stone-400 hover:text-stone-100 transition-colors duration-200 text-sm tracking-wide">
                                    Koleksiyonlar
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="font-sans text-stone-400 hover:text-stone-100 transition-colors duration-200 text-sm tracking-wide">
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="font-sans text-stone-400 hover:text-stone-100 transition-colors duration-200 text-sm tracking-wide">
                                    İletişim
                                </Link>
                            </li>
                            <li>
                                <Link href="/catalog" className="font-sans text-stone-400 hover:text-stone-100 transition-colors duration-200 text-sm tracking-wide">
                                    Katalog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="font-serif text-lg font-bold text-stone-100 uppercase tracking-wider mb-6">
                            İletişim
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-stone-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                <span className="font-sans text-stone-400 text-sm leading-relaxed tracking-wide">
                                    Sütçüler, Hastane Cd. NO:32<br />
                                    07320 Kepez/Antalya
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-stone-500" strokeWidth={1.5} />
                                <a href="tel:+905449404910" className="font-sans text-stone-400 hover:text-stone-100 transition-colors duration-200 text-sm tracking-wide">
                                    +90 544 940 49 10
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-stone-500" strokeWidth={1.5} />
                                <a href="mailto:info@yorgancioglu.com" className="font-sans text-stone-400 hover:text-stone-100 transition-colors duration-200 text-sm tracking-wide">
                                    info@yorgancioglu.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="font-serif text-lg font-bold text-stone-100 uppercase tracking-wider mb-6">
                            Bülten
                        </h3>
                        <p className="font-sans text-stone-400 text-sm mb-4 tracking-wide">
                            Yeni koleksiyonlardan haberdar olun.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="w-full px-4 py-3 bg-stone-900 border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-stone-700 text-sm tracking-wide"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-stone-100 hover:bg-white text-stone-900 font-semibold uppercase text-sm tracking-wider transition-colors duration-200"
                            >
                                Abone Ol
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-stone-900">
                <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-sans text-stone-500 text-sm tracking-wide">
                        © 2024 Yorgancıoğlu. Tüm hakları saklıdır.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-stone-900 rounded-full transition-colors duration-200"
                        >
                            <Instagram className="w-5 h-5 text-stone-500 hover:text-stone-100" strokeWidth={1.5} />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-stone-900 rounded-full transition-colors duration-200"
                        >
                            <Facebook className="w-5 h-5 text-stone-500 hover:text-stone-100" strokeWidth={1.5} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-stone-900 rounded-full transition-colors duration-200"
                        >
                            <Twitter className="w-5 h-5 text-stone-500 hover:text-stone-100" strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
