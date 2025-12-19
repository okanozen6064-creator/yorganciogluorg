import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/client'
import { ArrowRight } from 'lucide-react'

// Fetch posts
async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        excerpt
    }`
    return await client.fetch(query)
}

export default async function BlogSection() {
    let posts = await getPosts()

    // Eğer post yoksa placeholder göster (Tasarımın görülmesi için)
    if (!posts || posts.length === 0) {
        posts = [
            {
                _id: '1',
                title: '2025 Mobilya Trendleri: Doğaya Dönüş',
                slug: { current: '#' },
                publishedAt: new Date().toISOString(),
                excerpt: 'Ahşap dokular, yumuşak renkler ve sürdürülebilir malzemelerle evinizde huzurlu bir atmosfer yaratın.',
                // No image, will fallback to color block or placeholder logic if implemented, 
                // but let's handle the specific image render logic in the map to support "no image" gracefully.
            },
            {
                _id: '2',
                title: 'Küçük Salonlar İçin Dekorasyon Önerileri',
                slug: { current: '#' },
                publishedAt: new Date().toISOString(),
                excerpt: 'Dar alanları daha ferah ve kullanışlı hale getirmenin püf noktaları ve doğru mobilya seçimleri.',
            },
            {
                _id: '3',
                title: 'Kumaş Seçim Rehberi: Kadife mi, Keten mi?',
                slug: { current: '#' },
                publishedAt: new Date().toISOString(),
                excerpt: 'Yaşam tarzınıza ve evinize en uygun koltuk kumaşını seçerken dikkat etmeniz gerekenler.',
            }
        ]
    }

    return (
        <section className="py-24 md:py-32 bg-white border-t border-stone-100">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase mb-3 block">
                            Blog & Haberler
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                            Tasarım Günlükleri
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-stone-900 font-medium border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-all"
                    >
                        Tüm Yazılar
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                    {posts.map((post: any) => (
                        <Link
                            key={post._id}
                            href={`/blog/${post.slug.current}`}
                            className="group flex flex-col h-full"
                        >
                            {/* Image Wrapper */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 mb-6">
                                {post.mainImage ? (
                                    <Image
                                        src={urlFor(post.mainImage).width(800).height(600).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400 font-serif text-lg">
                                        Yorgancıoğlu
                                    </div>
                                )}
                                {/* Date Badge (Optional style) */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-stone-900">
                                    {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1">
                                <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:text-stone-600 transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                {post.excerpt && (
                                    <p className="font-sans text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">
                                        {post.excerpt}
                                    </p>
                                )}
                                <div className="mt-auto pt-4 flex items-center text-xs font-bold tracking-widest uppercase text-stone-900 group-hover:underline decoration-1 underline-offset-4">
                                    Devamını Oku
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
