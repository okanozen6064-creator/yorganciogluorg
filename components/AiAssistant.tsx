'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, User, Bot, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
    id: string
    text: string
    sender: 'user' | 'bot'
    options?: { label: string; action: string }[]
}

export default function AiAssistant() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Merhaba! Ben Yorgancıoğlu Asistanı. Size nasıl yardımcı olabilirim?',
            sender: 'bot',
            options: [
                { label: 'Katalog İstiyorum', action: 'catalog' },
                { label: 'Mağaza Konumu', action: 'location' },
                { label: 'İletişime Geç', action: 'contact' },
            ]
        }
    ])
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping])

    const handleOptionClick = (action: string, label: string) => {
        // Add user message
        const userMsg: Message = { id: Date.now().toString(), text: label, sender: 'user' }
        setMessages(prev => [...prev, userMsg])
        setIsTyping(true)

        // Simulate AI thinking and response
        setTimeout(() => {
            let botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: '',
                sender: 'bot'
            }

            switch (action) {
                case 'catalog':
                    botResponse.text = 'Harika! 2024 Koleksiyon kataloğumuza şu linkten ulaşabilirsiniz:'
                    botResponse.options = [{ label: 'Kataloğa Git', action: 'link_catalog' }]
                    break
                case 'location':
                    botResponse.text = 'Mağazamız Antalya Kepez\'de, Şehit Astsubay Ömer Halisdemir Caddesi üzerinde bulunuyor. Tam konum bilgisi ister misiniz?'
                    botResponse.options = [
                        { label: 'Konumu Göster', action: 'link_map' },
                        { label: 'Başka Bir Konu', action: 'reset' }
                    ]
                    break
                case 'contact':
                    botResponse.text = 'Müşteri temsilcimizle WhatsApp üzerinden anında görüşebilirsiniz.'
                    botResponse.options = [{ label: 'WhatsApp\'ı Aç', action: 'link_whatsapp' }]
                    break
                case 'link_catalog':
                    window.location.href = '/catalog'
                    botResponse.text = 'Sizi kataloğa yönlendiriyorum...'
                    break
                case 'link_map':
                    window.open('https://maps.app.goo.gl/kWrGd3xPiKgMoUD77', '_blank')
                    botResponse.text = 'Haritalarda açıldı.'
                    break
                case 'link_whatsapp':
                    window.open('https://wa.me/905449404910', '_blank')
                    botResponse.text = 'WhatsApp açılıyor...'
                    break
                case 'reset':
                    botResponse.text = 'Başka nasıl yardımcı olabilirim?'
                    botResponse.options = [
                        { label: 'Katalog İstiyorum', action: 'catalog' },
                        { label: 'Mağaza Konumu', action: 'location' },
                        { label: 'İletişime Geç', action: 'contact' },
                    ]
                    break
                default:
                    botResponse.text = 'Anlayamadım, lütfen seçeneklerden birini seçin.'
                    botResponse.options = [
                        { label: 'Ana Menü', action: 'reset' }
                    ]
            }

            setMessages(prev => [...prev, botResponse])
            setIsTyping(false)
        }, 1000)
    }

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-24 right-8 z-40 bg-stone-900 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group ${isOpen ? 'hidden' : 'flex'}`}
            >
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                <Bot className="w-6 h-6" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-out whitespace-nowrap text-sm font-medium">
                    Asistan
                </span>
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-8 right-4 md:right-8 z-50 w-[90vw] md:w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col max-h-[600px]"
                    >
                        {/* Header */}
                        <div className="bg-stone-900 p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/10 rounded-full">
                                    <Bot className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Yorgancıoğlu Asistan</h3>
                                    <p className="text-xs text-stone-400">Çevrimiçi</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-stone-50 min-h-[300px]">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.sender === 'user'
                                        ? 'bg-stone-900 text-white rounded-tr-none'
                                        : 'bg-white text-stone-800 shadow-sm border border-stone-100 rounded-tl-none'
                                        }`}>
                                        <p>{msg.text}</p>

                                        {/* Options */}
                                        {msg.options && (
                                            <div className="mt-3 flex flex-col gap-2">
                                                {msg.options.map((option, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleOptionClick(option.action, option.label)}
                                                        className="text-left text-xs bg-stone-100 hover:bg-stone-200 text-stone-900 py-2 px-3 rounded-lg transition-colors flex items-center justify-between group"
                                                    >
                                                        {option.label}
                                                        <ChevronRight className="w-3 h-3 text-stone-400 group-hover:text-stone-600" />
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-stone-100 flex gap-1">
                                        <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Input Area (Visual mostly) */}
                        <div className="p-4 bg-white border-t border-stone-100">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Bir seçenek belirleyin..."
                                    disabled
                                    className="w-full bg-stone-50 border border-stone-200 rounded-full py-3 px-4 text-sm focus:outline-none cursor-not-allowed opacity-70"
                                />
                                <button disabled className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-stone-200 rounded-full text-stone-400 cursor-not-allowed">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-[10px] text-center text-stone-400 mt-2">
                                AI Asistan - Hazır yanıtları kullanın
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
