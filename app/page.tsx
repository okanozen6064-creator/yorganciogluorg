import HeroSlider from '@/components/HeroSlider'
import CategoryCircles from '@/components/CategoryCircles'
import PosterSection from '@/components/PosterSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import ReelsSection from '@/components/ReelsSection'
import BlogSection from '@/components/BlogSection'
import { client } from '@/sanity/lib/client'

export const revalidate = 60 // Revalidate every 60 seconds

async function getFeaturedProducts() {
    const query = `*[_type == "product" && featured == true] | order(_createdAt desc) [0...6]{
    _id,
    title,
    slug,
    images,
    description
  }`

    return await client.fetch(query)
}

async function getCollections() {
    const query = `*[_type == "collection"] | order(title asc){
    _id,
    name,
    slug,
    image
  }`
    return await client.fetch(query)
}

export default async function HomePage() {
    const [featuredProducts, collections] = await Promise.all([
        getFeaturedProducts(),
        getCollections()
    ])

    return (
        <div className="bg-stone-50">
            <HeroSlider />
            <CategoryCircles collections={collections} />
            <PosterSection />
            {featuredProducts.length > 0 && (
                <FeaturedProducts products={featuredProducts} />
            )}
            <BlogSection />
            <ReelsSection />
        </div>
    )
}
