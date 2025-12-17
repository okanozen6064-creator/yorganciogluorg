import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './schemas/product'
import { collectionType } from './schemas/collection'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [productType, collectionType],
}
