'use client'

import { Shield, Truck, PenTool } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
    {
        icon: Shield,
        title: '2 YIL GARANTİ',
        description: 'Ürünlerimiz kalitesine olan güvenimizle 2 yıl boyunca tam kapsamlı garanti altındadır.',
    },
    {
        icon: Truck,
        title: 'ÜCRETSİZ TESLİMAT',
        description: 'Profesyonel ekibimizle Türkiye\'nin her yerine güvenli ve ücretsiz teslimat hizmeti.',
    },
    {
        icon: PenTool,
        title: 'ÖZEL TASARIM',
        description: 'Mekanınıza özel ölçü ve tasarım seçenekleriyle hayalinizdeki evi yaratın.',
    }
]

export default function TrustSignals() {
    return (
        <section className="py-32 bg-stone-950 text-stone-300 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 relative z-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group flex flex-col items-center text-center relative"
                        >
                            {/* Vertical Separator for desktop */}
                            {index !== features.length - 1 && (
                                <div className="hidden md:block absolute right-[-24px] lg:right-[-48px] top-1/4 h-1/2 w-px bg-stone-800/50" />
                            )}

                            <div className="mb-8 relative transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <feature.icon
                                    strokeWidth={1}
                                    className="w-16 h-16 text-[#D4AF37] relative z-10 transform transition-transform duration-500"
                                />
                            </div>

                            <h3 className="font-serif text-xl lg:text-2xl text-stone-50 mb-4 tracking-widest uppercase relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[#D4AF37] after:transition-all after:duration-500 group-hover:after:w-12">
                                {feature.title}
                            </h3>

                            <p className="font-sans text-stone-400 leading-relaxed text-sm lg:text-base tracking-wide max-w-xs mx-auto group-hover:text-stone-300 transition-colors duration-300">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
