'use client'

import { ShieldCheck, Truck, Ruler } from 'lucide-react'
import { motion } from 'framer-motion'

const trustSignals = [
    {
        icon: ShieldCheck,
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
        <section className="py-16 bg-gradient-to-b from-white to-brand-cream/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trustSignals.map((signal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-4">
                                <signal.icon className="w-8 h-8 text-brand-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {signal.title}
                            </h3>
                            <p className="text-gray-600">{signal.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
