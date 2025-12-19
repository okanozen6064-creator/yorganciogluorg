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
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!posts || posts.length === 0) return null

    // Layout Strategy: First post is HERO. Others are GRID.
    const heroPost = posts[0]
    const otherPosts = posts.slice(1)

    return (
        <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-light">
            {/* Sticky Social/Nav Bar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -20 }}
                className="fixed top-0 left-0 right-0 z-40 bg-[#F5F5F0]/90 backdrop-blur-md border-b border-stone-200 py-4 px-8 flex justify-between items-center"
            >
                <Link href="/" className="font-serif font-bold tracking-widest text-lg">YORGANCIOĞLU</Link>
                <span className="text-xs tracking-[0.3em] font-sans">MAGAZINE</span>
            </motion.div>

            {/* Header */}
            <header className="pt-40 pb-20 px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 text-stone-500"
                >
                    Estetik & Yaşam
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-serif text-6xl md:text-9xl leading-[0.85] tracking-tight"
                >
                    THE JOURNAL
                </motion.h1>
            </header>

            {/* Hero Post */}
            <section className="max-w-[1500px] mx-auto px-6 mb-32">
                <Link href={`/blog/${heroPost.slug.current}`} className="group block">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden">
                            {heroPost.mainImage ? (
                                <Image
                                    src={typeof heroPost.mainImage === 'string' ? heroPost.mainImage : urlFor(heroPost.mainImage).width(1600).url()}
                                    alt={heroPost.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full bg-stone-300 flex items-center justify-center text-stone-400 font-serif text-2xl">
                                    Görsel Hazırlanıyor
                                </div>
                            )}
                        </div>
                        <div className="lg:col-span-4 lg:pl-8 pb-4">
                            <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-stone-500">
                                {heroPost.category || 'Kapak Konusu'}
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 group-hover:underline decoration-1 underline-offset-4">
                                {heroPost.title}
                            </h2>
                            <p className="text-stone-600 text-lg leading-relaxed line-clamp-4 font-serif italic">
                                {heroPost.excerpt}
                            </p>
                            <span className="inline-block mt-8 text-xs font-bold tracking-[0.2em] uppercase border-b border-black pb-1">
                                Devamını Oku
                            </span>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Editorial Grid */}
            <section className="max-w-[1500px] mx-auto px-6 pb-40">
                <div className="border-t border-black mb-16 pt-4 flex justify-between items-end">
                    <span className="font-serif text-4xl md:text-5xl italic">Editörün Seçimleri</span>
                    <span className="hidden md:block text-xs font-bold tracking-[0.2em]">CİLT 01 // 2025</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    {otherPosts.map((post, i) => (
                        <motion.article
                            key={post._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer flex flex-col h-full"
                        >
                            <Link href={`/blog/${post.slug.current}`} className="block h-full flex flex-col">
                                <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-stone-200">
                                    {post.mainImage ? (
                                        <Image
                                            src={typeof post.mainImage === 'string' ? post.mainImage : urlFor(post.mainImage).width(800).height(1067).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center border-t-4 border-[#1A1A1A] bg-white">
                                            <span className="font-serif text-6xl text-stone-200 mb-4">{i + 1}</span>
                                            <span className="font-serif text-xl italic text-stone-400">Yorgancıoğlu<br />Magazin</span>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-auto">
                                    <div className="flex justify-between items-baseline mb-3 border-b border-stone-300 pb-2">
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-500">
                                            {post.category || 'Makale'}
                                        </span>
                                        <span className="text-[10px] tracking-widest text-stone-400">
                                            {/* Date placeholder if needed, or just remove */}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4 group-hover:text-stone-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-stone-600 leading-relaxed font-serif line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    )
}
