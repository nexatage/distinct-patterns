import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import sanityClient from './sanityClient.js';



// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder(sanityClient)

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}