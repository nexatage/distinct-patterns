import imageUrlBuilder from '@sanity/image-url';
import sanityClient from './sanityClient.js'; // Import your Sanity client setup

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}