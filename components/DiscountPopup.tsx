'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { client, urlFor } from '@/sanity/lib/client'
import Image from 'next/image'

interface PopupSettings {
    enabled: boolean
    title: string
    description: string
    image: any
    buttonText: string
    buttonLink: string
    delay: number
}

export default function DiscountPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const [settings, setSettings] = useState<PopupSettings | null>(null)

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const data = await client.fetch(`
                    *[_type == "siteSettings"][0].popup
                `)
                setSettings(data)
            } catch (error) {
                console.error('Popup settings fetch error:', error)
            }
        }

        fetchSettings()
    }, [])

    useEffect(() => {
        if (!settings?.enabled) return

        // Show popup after delay (default 5s)
        const delayTime = (settings.delay || 5) * 1000

        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('discountPopupSeen')
            if (!hasSeenPopup) {
                setIsOpen(true)
            }
        }, delayTime)

        return () => clearTimeout(timer)
    }, [settings])

    const handleClose = () => {
        setIsOpen(false)
        sessionStorage.setItem('discountPopupSeen', 'true')
    }

    const handleCTA = () => {
        if (settings?.buttonLink) {
            window.open(settings.buttonLink, '_blank')
        }
        handleClose()
    }

    if (!settings || !isOpen) return null

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
                        className="fixed inset-0 bg-black/60 z-[99999] backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100000] w-[90%] max-w-md"
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
                                {settings.image && (
                                    <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden shadow-md">
                                        <Image
                                            src={urlFor(settings.image).url()}
                                            alt={settings.title || 'Kampanya'}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}

                                {!settings.image && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                        className="inline-block bg-brand-gold text-white text-xl font-bold px-6 py-3 rounded-xl mb-4 shadow-lg"
                                    >
                                        FIRSAT
                                    </motion.div>
                                )}

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {settings.title}
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    {settings.description}
                                </p>

                                <button
                                    onClick={handleCTA}
                                    className="w-full bg-brand-gold hover:bg-brand-darkGold text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                                >
                                    {settings.buttonText || 'İncele'}
                                </button>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-darkGold/20 rounded-full blur-3xl pointer-events-none" />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
