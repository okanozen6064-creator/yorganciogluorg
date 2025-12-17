import HeroSlider from '@/components/HeroSlider'
import TrustSignals from '@/components/TrustSignals'
import FeaturedProducts from '@/components/FeaturedProducts'
import ReelsSection from '@/components/ReelsSection'
import DiscountPopup from '@/components/DiscountPopup'
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
        <>
            <HeroSlider />
            <TrustSignals />
            {featuredProducts.length > 0 && (
                <FeaturedProducts products={featuredProducts} />
            )}
            <ReelsSection />
            <DiscountPopup />
        </>
    )
}
