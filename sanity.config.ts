import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schema'

import { StudioNavbar } from './sanity/components/StudioNavbar'

export default defineConfig({
    name: 'default',
    title: 'Yorgancıoğlu',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'v9xaviol',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    plugins: [
        deskTool({
            structure: (S) =>
                S.list()
                    .title('İçerik Yönetimi')
                    .items([
                        S.listItem()
                            .title('Ürünler (Kategoriye Göre)')
                            .child(
                                S.documentTypeList('collection')
                                    .title('Kategori Seçin')
                                    .child(categoryId =>
                                        S.documentList()
                                            .title('Ürünler')
                                            .filter('_type == "product" && category._ref == $categoryId')
                                            .params({ categoryId })
                                    )
                            ),
                        S.listItem()
                            .title('Tüm Ürünler')
                            .schemaType('product')
                            .child(S.documentTypeList('product').title('Tüm Ürünler')),
                        S.divider(),
                        S.listItem()
                            .title('Kategoriler')
                            .schemaType('collection')
                            .child(S.documentTypeList('collection').title('Kategoriler')),
                        S.listItem()
                            .title('Hero Slider')
                            .schemaType('heroSlide')
                            .child(S.documentTypeList('heroSlide').title('Hero Slider')),
                        S.listItem()
                            .title('Blog Yazıları')
                            .schemaType('post')
                            .child(S.documentTypeList('post').title('Blog Yazıları')),
                    ])
        }),
        visionTool()
    ],

    schema,

    studio: {
        components: {
            navbar: StudioNavbar
        }
    },

    basePath: '/studio',
})
