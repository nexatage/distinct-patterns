import sanityClient from "./sanityClient.js";

export async function getProducts() {
  const query = `*[_type == "product"]{
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    variations,
    instock,
    "category": category->{
      _id,
      title,
      description
    },
    "imageUrl": image.asset->url
  }`;

  return await sanityClient.fetch(query);
}

export async function getEachProducts(slug) {
  const query = `*[type == "product" && slug.current === $slug[0]]{
  _id,
  name,
  "slug":slug.current,
  description,
  variations,
  price,
  "imageUrl":image.asset->url,
  inStock
  "category": category->{
    _id,
    title,
    slug,
    description
   }
  }`;

  return await sanityClient.fetch(query, { slug });
}

export async function getCategory() {
  const query = `*[type == "category"]{
    _id,
    title,
    slug,
    description
  }`;

  return await sanityClient.fetch(query);
}
