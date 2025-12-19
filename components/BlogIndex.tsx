'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

interface Post {
    _id: string
    title: string
    slug: { current: string }
    mainImage: any
    publishedAt: string
    excerpt: string
    category?: string
}

export default function BlogIndex({ posts }: { posts: Post[] }) {
    const [email, setEmail] = useState('')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Logic: First post is featured, rest are grid
    // If no posts, show empty state or dummies
    const featuredList = posts.length > 0 ? [posts[0]] : []
    const gridList = posts.length > 1 ? posts.slice(1) : []

    const featuredArticle = featuredList[0]

    // Placeholder if no content
    if (!featuredArticle) {
        return (
            <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center">
                <p className="text-stone-500 font-serif text-xl">Henüz blog yazısı eklenmemiş.</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#F9F9F9]">
            {/* Sticky Social Bar */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: scrolled ? 1 : 0, x: scrolled ? 0 : -20 }}
                className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
            >
                <div className="flex flex-col gap-6 text-xs tracking-[0.2em] uppercase text-[#999999]">
                    <button className="hover:text-[#2A2A2A] transition-colors rotate-180 [writing-mode:vertical-lr]">
                        Instagram
                    </button>
                    <button className="hover:text-[#2A2A2A] transition-colors rotate-180 [writing-mode:vertical-lr]">
                        Pinterest
                    </button>
                </div>
            </motion.div>

            {/* Featured Section */}
            <section className="max-w-[1600px] mx-auto px-6 pt-32 pb-20">
                <Link href={`/blog/${featuredArticle.slug.current}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[85vh] group cursor-pointer overflow-hidden"
                    >
                        {featuredArticle.mainImage && (
                            <Image
                                src={urlFor(featuredArticle.mainImage).width(1600).height(1200).url()}
                                alt={featuredArticle.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                priority
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-12 md:p-16 text-white">
                            <div className="max-w-4xl">
                                <p className="text-xs tracking-[0.3em] uppercase mb-4 text-white/80">
                                    {featuredArticle.category || 'Tasarım Günlükleri'} · {new Date(featuredArticle.publishedAt).toLocaleDateString('tr-TR')}
                                </p>
                                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] text-balance">
                                    {featuredArticle.title}
                                </h2>
                                {featuredArticle.excerpt && (
                                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl leading-relaxed line-clamp-3">
                                        {featuredArticle.excerpt}
                                    </p>
                                )}
                                <span
                                    className="inline-block border border-white text-white hover:bg-white hover:text-[#2A2A2A] transition-all duration-300 px-8 py-4 text-sm tracking-[0.2em] uppercase backdrop-blur-sm"
                                >
                                    Hikayeyi Oku
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </section>

            {/* Asymmetrical Masonry Grid */}
            <section className="max-w-[1600px] mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
                    {gridList.map((article, index) => {
                        // Simple layout logic based on index
                        const isTall = index % 3 === 0
                        const isWide = index % 3 === 1

                        return (
                            <motion.article
                                key={article._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`group cursor-pointer ${isTall ? "md:row-span-2" : isWide ? "lg:col-span-2" : ""
                                    }`}
                            >
                                <Link href={`/blog/${article.slug.current}`}>
                                    <div className="relative overflow-hidden mb-6 border border-[#E5E5E5] aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]">
                                        {article.mainImage && (
                                            <Image
                                                src={urlFor(article.mainImage).width(800).height(800).url()}
                                                alt={article.title}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        )}
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-xs tracking-[0.3em] uppercase text-[#999999]">
                                            {article.category || 'Tasarım'} · {new Date(article.publishedAt).toLocaleDateString('tr-TR')}
                                        </p>
                                        <h3 className="font-serif text-3xl md:text-4xl text-[#2A2A2A] leading-tight group-hover:opacity-70 transition-opacity duration-300 text-balance">
                                            <span className="relative inline-block">
                                                {article.title}
                                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2A2A2A] group-hover:w-full transition-all duration-500" />
                                            </span>
                                        </h3>
                                        {article.excerpt && (
                                            <p className="text-base text-[#666666] leading-relaxed line-clamp-3">
                                                <span className="float-left font-serif text-7xl leading-[0.8] mr-3 mt-2 text-[#2A2A2A]">
                                                    {article.excerpt.charAt(0)}
                                                </span>
                                                {article.excerpt.slice(1)}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            </motion.article>
                        )
                    })}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="max-w-[1600px] mx-auto px-6 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto text-center border-t border-b border-[#E5E5E5] py-20"
                >
                    <h2 className="font-serif text-5xl md:text-6xl mb-6 text-[#2A2A2A] text-balance">Topluluğa Katılın</h2>
                    <p className="text-lg text-[#666666] mb-12 tracking-wide leading-relaxed">
                        Tasarım, ustalık ve iyi yaşam sanatı üzerine özenle seçilmiş hikayeler.
                    </p>
                    <div className="flex gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="E-posta adresiniz"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 w-full bg-transparent border-b border-[#E5E5E5] py-2 text-[#2A2A2A] placeholder:text-[#999999] focus:outline-none focus:border-[#2A2A2A] transition-colors rounded-none"
                        />
                        <button className="bg-[#2A2A2A] text-white hover:bg-[#444444] transition-colors px-8 py-3 whitespace-nowrap text-sm tracking-[0.2em] uppercase">
                            Abone Ol
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
