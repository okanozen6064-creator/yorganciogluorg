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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug)

    if (!post) {
        // Fallback for demo purposes if the slug matches one of our dummy items
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

    return (
        <article className="min-h-screen pt-24 pb-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8 text-sm font-medium tracking-wide uppercase"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Ana Sayfaya Dön
                </Link>

                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-4">
                        {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight mb-8">
                        {post.title}
                    </h1>
                </header>

                {/* Main Image */}
                {post.mainImage && (
                    <div className="relative aspect-[16/9] w-full mb-12 rounded-sm overflow-hidden bg-stone-100">
                        <Image
                            src={urlFor(post.mainImage).width(1200).height(675).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-stone prose-lg mx-auto font-sans focus:outline-none">
                    <PortableText value={post.body} />
                </div>
            </div>
        </article>
    )
}
