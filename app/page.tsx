import HeroSlider from '@/components/HeroSlider'
import CategoryGrid from '@/components/CategoryGrid'
import PosterSection from '@/components/PosterSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import ReelsSection from '@/components/ReelsSection'
import { client } from '@/sanity/lib/client'

async function getFeaturedProducts() {
    const query = `*[_type == "product" && featured == true][0...6]{
    _id,
    title,
    slug,
    images,
    description
  }`

    return await client.fetch(query)
}

export default async function HomePage() {
    const featuredProducts = await getFeaturedProducts()

    return (
        <div className="bg-stone-50">
            <HeroSlider />
            <CategoryGrid />
            <PosterSection />
            {featuredProducts.length > 0 && (
                <FeaturedProducts products={featuredProducts} />
            )}
            <ReelsSection />
        </div>
    )
}
