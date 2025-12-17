'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface FloatingWhatsAppProps {
    phoneNumber: string
    message?: string
}

export default function FloatingWhatsApp({
    phoneNumber,
    message = 'Merhaba, ürünleriniz hakkında bilgi almak istiyorum.'
}: FloatingWhatsAppProps) {
    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <motion.button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {/* Pulse Animation */}
            <motion.div
                className="absolute inset-0 bg-[#25D366] rounded-full opacity-75"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 0, 0.7],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* WhatsApp Icon */}
            <MessageCircle className="w-8 h-8 text-white relative z-10" />

            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                WhatsApp ile iletişime geçin
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
            </div>
        </motion.button>
    )
}
