'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function DiscountPopup() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('discountPopupSeen')
            if (!hasSeenPopup) {
                setIsOpen(true)
            }
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    const handleClose = () => {
        setIsOpen(false)
        sessionStorage.setItem('discountPopupSeen', 'true')
    }

    const handleCTA = () => {
        window.open('https://wa.me/905XXXXXXXXX', '_blank')
        handleClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 z-[55] backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] w-[90%] max-w-md"
                    >
                        <div className="bg-gradient-to-br from-brand-cream to-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10 cursor-pointer"
                                aria-label="Kapat"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>

                            {/* Content */}
                            <div className="text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="inline-block bg-brand-gold text-white text-4xl font-bold px-6 py-3 rounded-xl mb-4 shadow-lg"
                                >
                                    %10 İNDİRİM
                                </motion.div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Özel Fırsat!
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    İlk siparişinizde <span className="font-semibold text-brand-gold">%10 indirim</span> kazanın.
                                    Şimdi WhatsApp üzerinden bizimle iletişime geçin!
                                </p>

                                <button
                                    onClick={handleCTA}
                                    className="w-full bg-brand-gold hover:bg-brand-darkGold text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                                >
                                    Fırsatı Kaçırma
                                </button>

                                <p className="text-xs text-gray-500 mt-4">
                                    * İndirim sadece ilk siparişinizde geçerlidir.
                                </p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-darkGold/20 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
