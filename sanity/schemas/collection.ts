import { defineType, defineField } from 'sanity'

export const collectionType = defineType({
    name: 'collection',
    title: 'Koleksiyonlar',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Koleksiyon Adı',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Açıklama',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Koleksiyon Görseli',
            type: 'image',
        }),
    ],
})
