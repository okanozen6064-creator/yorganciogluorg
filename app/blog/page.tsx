import { client } from '@/sanity/lib/client'
import BlogIndex from '@/components/BlogIndex'

export const revalidate = 60

export default async function BlogPage() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        excerpt
    }`
    let posts = await client.fetch(query)

    if (!posts || posts.length === 0) {
        posts = [{
            _id: 'demo-1',
            title: 'Lüksün Yeni Tanımı: "Sessiz Lüks" Ev Dekorasyonuna Nasıl Uyarlanır?',
            slug: { current: 'sessiz-luks' },
            mainImage: null, // Image fallback handled in BlogIndex
            publishedAt: new Date().toISOString(),
            excerpt: 'Moda dünyasında podyumları ele geçiren, logoların gürültüsünü susturup kalitenin fısıltısını ön plana çıkaran o asil akım, şimdi yaşam alanlarımızın ruhuna sızıyor: Quiet Luxury (Sessiz Lüks).',
            category: 'Trendler'
        }]
    }

    return <BlogIndex posts={posts} />
}
