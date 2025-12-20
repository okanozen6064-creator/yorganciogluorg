
import { defineField, defineType } from 'sanity'

export const heroSlideType = defineType({
    name: 'heroSlide',
    title: 'Hero Slider',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Başlık (Title)',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Alt Başlık (Subtitle)',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Görsel (Image)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'order',
            title: 'Sıra (Order)',
            type: 'number',
        }),
    ],
})
