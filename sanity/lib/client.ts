import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId, useCdn } from '../env'

// Sanity client oluşturulurken projectId kontrolü
if (!projectId) {
    console.warn('Sanity projectId bulunamadı. Environment variable\'ları kontrol edin.')
}

export const client = createClient({
    apiVersion,
    dataset,
    projectId: projectId || 'v9xaviol', // Fallback olarak mevcut projeId
    useCdn,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}
