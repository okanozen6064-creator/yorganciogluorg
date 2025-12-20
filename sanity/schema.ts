import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './schemas/product'
import { collectionType } from './schemas/collection'
import { postType } from './schemas/post'
import { heroSlideType } from './schemas/heroSlide'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [productType, collectionType, postType, heroSlideType],
}
