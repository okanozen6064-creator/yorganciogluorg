'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { urlFor } from '@/sanity/lib/client'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

interface ProductGalleryProps {
    images: any[]
    productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

    return (
        <>
            {/* Desktop: Vertical Stack */}
            <div className="hidden lg:block space-y-4">
                {images.map((image, index) => (
                    <div key={index} className="relative w-full aspect-square bg-stone-100">
                        <Image
                            src={urlFor(image).width(2000).height(2000).quality(100).url()}
                            alt={`${productName} - Görsel ${index + 1}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority={index === 0}
                            quality={100}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile: Swiper Slider */}
            <div className="lg:hidden">
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mb-2"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full aspect-square bg-stone-100">
                                <Image
                                    src={urlFor(image).width(1200).height(1200).quality(100).url()}
                                    alt={`${productName} - Görsel ${index + 1}`}
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                    quality={100}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Thumbnails */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full aspect-square bg-stone-100 cursor-pointer">
                                <Image
                                    src={urlFor(image).width(200).height(200).url()}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
