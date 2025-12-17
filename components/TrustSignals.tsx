'use client'

import { Shield, Truck, Ruler } from 'lucide-react'
import { motion } from 'framer-motion'

const trustSignals = [
    {
        icon: Shield,
        title: '2 Yıl Garanti',
        description: 'Tüm ürünlerimizde 2 yıl üretici garantisi',
    },
    {
        icon: Truck,
        title: 'Ücretsiz Kurulum & Nakliye',
        description: 'Profesyonel ekibimizle ücretsiz montaj ve teslimat',
    },
    {
        icon: Ruler,
        title: 'Özel Tasarım Desteği',
        description: 'Size özel ölçü ve tasarım imkanı',
    },
]

export default function TrustSignals() {
    return (
        <section className="py-24 bg-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {trustSignals.map((signal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 flex items-center justify-center mb-6">
                                <signal.icon className="w-12 h-12 text-stone-800" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-stone-900 uppercase tracking-wider mb-3">
                                {signal.title}
                            </h3>
                            <p className="font-sans text-stone-600 leading-relaxed tracking-wide">
                                {signal.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
