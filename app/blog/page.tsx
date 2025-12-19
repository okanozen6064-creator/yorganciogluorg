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
    const posts = await client.fetch(query)

    return <BlogIndex posts={posts} />
}
