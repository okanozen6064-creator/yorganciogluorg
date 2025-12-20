import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/client'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
        title,
        mainImage,
        publishedAt,
        body
    }`
    return await client.fetch(query, { slug })
}

import { demoPosts } from '@/lib/blog-data'

const components = {
    block: {
        h1: ({ children }: any) => <h1 className="font-serif text-3xl md:text-5xl text-stone-900 mt-16 mb-8 leading-tight">{children}</h1>,
        h2: ({ children }: any) => <h2 className="font-serif text-2xl md:text-4xl text-stone-800 mt-14 mb-6 leading-tight">{children}</h2>,
        h3: ({ children }: any) => <h3 className="font-serif text-xl md:text-2xl text-stone-800 mt-12 mb-4 font-bold tracking-wide uppercase border-l-4 border-stone-200 pl-4">{children}</h3>,
        normal: ({ children }: any) => <p className="font-cormorant text-xl md:text-2xl leading-relaxed text-stone-700 mb-8 font-light ml-0 md:first-of-type:first-letter:text-7xl md:first-of-type:first-letter:font-serif md:first-of-type:first-letter:text-stone-900 md:first-of-type:first-letter:mr-3 md:first-of-type:first-letter:float-left">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="relative my-12 p-8 md:p-12 text-center">
                <span className="absolute top-0 left-0 text-8xl text-stone-200 font-serif leading-none -translate-x-4 -translate-y-8">“</span>
                <p className="font-serif text-2xl md:text-4xl italic text-stone-900 leading-snug relative z-10">
                    {children}
                </p>
                <cite className="block mt-6 text-sm font-sans font-bold tracking-[0.2em] text-stone-400 uppercase not-italic">
                    Yorgancıoğlu Design
                </cite>
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }: any) => <strong className="font-bold text-stone-900">{children}</strong>,
        em: ({ children }: any) => <em className="italic text-stone-800 font-serif">{children}</em>,
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a href={value.href} rel={rel} className="border-b border-stone-400 text-stone-800 hover:border-stone-900 transition-colors pb-0.5">
                    {children}
                </a>
            )
        },
    }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug)
    const demoPost = !post ? demoPosts.find(p => p.slug.current === params.slug) : null

    const activePost = post || demoPost

    if (!activePost) {
        if (params.slug === '#') {
            return (
                <div className="min-h-screen pt-32 pb-24 bg-white flex flex-col items-center justify-center text-center px-4">
                    <h1 className="font-serif text-4xl mb-4">Demo İçerik</h1>
                    <p className="text-stone-500 mb-8">Bu bir örnek blog yazısıdır. Sanity paneline giderek kendi yazılarınızı ekleyebilirsiniz.</p>
                    <Link href="/" className="text-stone-900 underline">Ana Sayfaya Dön</Link>
                </div>
            )
        }
        return notFound()
    }

    const mainImageSrc = post?.mainImage
        ? urlFor(post.mainImage).width(1600).url()
        : (demoPost?.mainImage || null)

    return (
        <article className="min-h-screen pt-40 pb-24 bg-[#FAFAF8] selection:bg-stone-200 text-stone-800">
            <div className="max-w-4xl mx-auto px-6">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors mb-16 text-xs font-bold tracking-[0.2em] uppercase group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Bloga Dön
                </Link>

                <header className="mb-20 text-center">
                    <div className="text-xs font-bold tracking-[0.3em] text-stone-400 uppercase mb-8">
                        {new Date(activePost.publishedAt).toLocaleDateString('tr-TR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })} • {activePost.category || 'M A K A L E'}
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 leading-[0.9] mb-12 max-w-4xl mx-auto tracking-tight">
                        {activePost.title}
                    </h1>
                    <div className="w-24 h-1 bg-stone-900 mx-auto" />
                </header>

                {mainImageSrc && (
                    <div className="relative w-full aspect-[16/9] mb-24 shadow-2xl">
                        <Image
                            src={mainImageSrc}
                            alt={activePost.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="max-w-3xl mx-auto">
                    <PortableText value={activePost.body} components={components} />

                    <div className="mt-24 pt-12 border-t border-stone-200 flex flex-col items-center">
                        <span className="font-serif italic text-2xl md:text-3xl text-stone-400 mb-6">Yorgancıoğlu</span>
                        <p className="text-center font-cormorant text-xl text-stone-600 max-w-lg">
                            "Eviniz, sizin en kişisel sanat galerinizdir. Onu sevgiyle donatın."
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}
