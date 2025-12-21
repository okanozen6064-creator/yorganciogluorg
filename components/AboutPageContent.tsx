'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Award, Users, Star, ArrowRight, Hammer, PenTool, LayoutTemplate } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemFade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function AboutPageContent() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <div className="bg-stone-50 overflow-hidden" ref={containerRef}>
            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-105"
                        poster="/poster-image.jpg" // Fallback if needed
                    >
                        <source src="/videos/hakkimizda.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-5xl"
                    >
                        <span className="inline-block text-brand-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium">
                            1985'ten Beri
                        </span>
                        <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                            Zarafetin ve Ustalığın <br className="hidden md:block" />
                            <span className="italic font-light">Eşsiz Hikayesi</span>
                        </h1>
                        <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Her detayında tutku, her dokunuşunda sanat var. Yorgancıoğlu Mobilya olarak, yaşam alanlarınızı zamansız tasarımlarla buluşturuyoruz.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <span className="text-white/60 text-xs tracking-widest uppercase">Keşfet</span>
                        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
                    </motion.div>
                </div>
            </div>

            {/* Vision Section */}
            <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="whileInView"
                        className="relative"
                    >
                        <h2 className="font-cormorant text-4xl md:text-6xl font-bold text-stone-900 leading-tight mb-8">
                            "Mobilya sadece bir eşya değil, <span className="italic text-stone-600">yaşam tarzınızın aynasıdır</span>."
                        </h2>
                        <div className="w-24 h-1 bg-brand-gold mb-8" />
                        <p className="font-sans text-lg text-stone-600 leading-relaxed mb-6">
                            Yorgancıoğlu Mobilya, Antalya’da küçük bir atölye olarak başladığı yolculuğuna, bugün lüks mobilya sektörünün öncü markalarından biri olarak devam ediyor. Dört nesildir süregelen ahşap tutkumuz, modern teknolojiler ve yenilikçi tasarım anlayışıyla harmanlanarak evlerinize konuk oluyor.
                        </p>
                        <p className="font-sans text-lg text-stone-600 leading-relaxed">
                            Bizim için her proje, yeni bir sanat eseri yaratma fırsatıdır. Standartların ötesine geçerek, kişiye özel, fonksiyonel ve estetik çözümler sunuyoruz.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] bg-stone-200 overflow-hidden rounded-sm"
                    >
                        {/* Abstract/Placeholder graphics since we might not have a perfect image ready */}
                        <div className="absolute inset-0 bg-stone-800">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-500 via-stone-800 to-black"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-cormorant text-9xl whitespace-nowrap select-none">
                                ESTETİK
                            </div>
                        </div>
                        {/* If there was a specific secondary image user wanted, we would use it here. 
                 Using a stylized energetic composed div or gradient for now to ensure visual quality without requiring assets.
             */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="border border-white/20 p-12 text-center backdrop-blur-sm">
                                <span className="block text-6xl text-white/90 font-serif mb-2">40+</span>
                                <span className="text-white/60 tracking-widest uppercase text-sm">Yıllık Tecrübe</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="bg-stone-900 text-white py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.h2
                            variants={fadeIn}
                            initial="initial"
                            whileInView="whileInView"
                            className="font-cormorant text-4xl md:text-5xl lg:text-6xl mb-4"
                        >
                            Değerlerimiz
                        </motion.h2>
                        <motion.p
                            variants={fadeIn}
                            initial="initial"
                            whileInView="whileInView"
                            className="text-white/60 max-w-2xl mx-auto font-sans font-light"
                        >
                            Mükemmelliği hedefleyen çalışma prensiplerimiz
                        </motion.p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            {
                                icon: <Hammer className="w-8 h-8" />,
                                title: "Ustalık",
                                desc: "Geleneksel el işçiliğini modern tekniklerle birleştiriyoruz."
                            },
                            {
                                icon: <StartIcon />,
                                title: "Kalite",
                                desc: "En dayanıklı ve seçkin malzemeleri kullanıyoruz."
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Müşteri Odaklılık",
                                desc: "Hayallerinizi dinliyor, size özel çözümler üretiyoruz."
                            },
                            {
                                icon: <PenTool className="w-8 h-8" />,
                                title: "Özgün Tasarım",
                                desc: "Trendleri belirleyen, zamansız çizgiler yaratıyoruz."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemFade}
                                className="bg-stone-800/50 p-8 border border-white/5 hover:border-brand-gold/30 transition-colors duration-300 group"
                            >
                                <div className="w-14 h-14 bg-stone-700/50 rounded-full flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-cormorant text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-white/60 font-sans leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Craftsmanship / Process Parallax-ish */}
            <section className="py-24 md:py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="w-full md:w-1/3 space-y-12">
                            <div className="sticky top-32">
                                <h2 className="font-cormorant text-5xl md:text-7xl text-stone-900 leading-none mb-8">
                                    Tasarım<br /><span className="italic text-stone-400">Sürecimiz</span>
                                </h2>
                                <p className="text-stone-600 font-sans mb-8">
                                    Her mobilyanın arkasında, titizlikle işleyen bir süreç ve büyük bir emek yatar. İskeletten kumaşa, ciladan montaja kadar her adımda mükemmeli arıyoruz.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-stone-900 border-b border-stone-900 pb-1 hover:text-brand-darkGold hover:border-brand-darkGold transition-colors uppercase tracking-widest text-sm font-medium">
                                    Bize Ulaşın <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 flex flex-col gap-20">
                            {[
                                { title: "Keşif ve Planlama", desc: "Mekanınızı inceliyor, ihtiyaçlarınızı belirliyor ve en uygun yerleşim planını oluşturuyoruz.", step: "01" },
                                { title: "Tasarım ve Modelleme", desc: "Hayalinizdeki mobilyayı 3 boyutlu olarak modelliyor, üretime geçmeden önce size sunuyoruz.", step: "02" },
                                { title: "Üretim ve İşçilik", desc: "Usta ellerde şekillenen ahşap, kalite kontrol süreçlerinden geçerek sanat eserine dönüşüyor.", step: "03" },
                                { title: "Teslimat ve Montaj", desc: "Evinize değer katacak mobilyalarınızı, uzman ekibimizle güvenle teslim ediyor ve kuruyoruz.", step: "04" }
                            ].map((process, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="group border-l-2 border-stone-200 pl-8 md:pl-12 py-4 relative"
                                >
                                    <span className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-white border-2 border-stone-300 group-hover:border-brand-gold group-hover:bg-brand-gold transition-colors duration-300" />
                                    <span className="text-6xl md:text-8xl font-cormorant text-stone-100 font-bold absolute -top-4 right-0 select-none -z-10 group-hover:text-stone-200 transition-colors">
                                        {process.step}
                                    </span>
                                    <h3 className="font-cormorant text-3xl font-bold text-stone-900 mb-4">{process.title}</h3>
                                    <p className="font-sans text-stone-600 leading-relaxed max-w-lg">
                                        {process.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 bg-stone-900 text-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-sm mix-blend-overlay"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="font-cormorant text-5xl md:text-7xl text-white mb-8">
                        Evinizi Dönüştürmeye <br /> Hazır mısınız?
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl font-sans mb-12 max-w-2xl mx-auto">
                        Siz hayal edin, biz tasarlayalım. Yorgancıoğlu kalitesiyle tanışmak için showroom'umuza bekliyoruz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact" className="px-10 py-4 bg-brand-gold text-white font-serif text-lg tracking-wide hover:bg-brand-darkGold transition-colors duration-300 rounded-sm">
                            İletişime Geç
                        </Link>
                        <Link href="/collections" className="px-10 py-4 border border-white/30 text-white font-serif text-lg tracking-wide hover:bg-white hover:text-stone-900 transition-all duration-300 rounded-sm">
                            Koleksiyonları İncele
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

function StartIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
