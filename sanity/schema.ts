import { type SchemaTypeDefinition } from 'next-sanity'
import { productType } from './product'
import { collectionType } from './collection'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [productType, collectionType],
}
