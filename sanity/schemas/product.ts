import { defineType, defineField } from 'sanity'

export const productType = defineType({
    name: 'product',
    title: 'Ürünler',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Ürün Adı',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'images',
            title: 'Ürün Görselleri (Toplu yükleme yapabilirsiniz)',
            type: 'array',
            of: [{
                type: 'image',
                options: {
                    hotspot: true,
                }
            }],
            options: {
                layout: 'grid',
            },
            validation: (Rule) => Rule.required().min(1).max(20).warning('En az 1, en fazla 20 görsel yükleyebilirsiniz'),
        }),
        defineField({
            name: 'description',
            title: 'Kısa Açıklama',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'category',
            title: 'Kategori',
            type: 'reference',
            to: [{ type: 'collection' }],
        }),
        defineField({
            name: 'dimensions',
            title: 'Ölçüler',
            type: 'object',
            fields: [
                {
                    name: 'width',
                    title: 'Genişlik (cm)',
                    type: 'number',
                },
                {
                    name: 'height',
                    title: 'Yükseklik (cm)',
                    type: 'number',
                },
                {
                    name: 'depth',
                    title: 'Derinlik (cm)',
                    type: 'number',
                },
            ],
        }),
        defineField({
            name: 'fabricType',
            title: 'Kumaş Türü',
            type: 'string',
            options: {
                list: [
                    { title: 'Kadife', value: 'kadife' },
                    { title: 'Keten', value: 'keten' },
                    { title: 'Deri', value: 'deri' },
                    { title: 'Süet', value: 'suet' },
                    { title: 'Pamuklu', value: 'pamuklu' },
                    { title: 'Diğer', value: 'diger' },
                ],
            },
        }),
        defineField({
            name: 'material',
            title: 'Malzeme',
            type: 'string',
            options: {
                list: [
                    { title: 'Ceviz', value: 'ceviz' },
                    { title: 'Meşe', value: 'mese' },
                    { title: 'Kayın', value: 'kayin' },
                    { title: 'Metal', value: 'metal' },
                    { title: 'Mermer', value: 'mermer' },
                    { title: 'MDF', value: 'mdf' },
                    { title: 'Diğer', value: 'diger' },
                ],
            },
        }),
        defineField({
            name: 'price',
            title: 'Fiyat (₺)',
            type: 'number',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'featured',
            title: 'Öne Çıkan Ürün',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'images.0',
        },
    },
})
