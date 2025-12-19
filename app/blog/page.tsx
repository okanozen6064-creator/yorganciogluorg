import { client } from '@/sanity/lib/client'
import BlogIndex from '@/components/BlogIndex'
import { demoPosts } from '@/lib/blog-data'

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
        posts = demoPosts
    }

    return <BlogIndex posts={posts} />
}
