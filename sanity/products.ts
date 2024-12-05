import sanityClient from "./sanityClient.js";

export async function getProducts() {
  const query = `*[_type == "product"]{
     _id,
    name,
    "slug": slug.current,
    description,
    price,
    availablequantity,
    category->{title, slug},
    variations[]{
      color 
    },
    images[]{
      asset->{
        url
      }
    },
    ratings,
    inStock
  
  }`;

  return await sanityClient.fetch(query);
}
export async function getProductsByCategory(category) {
  const query = ` *[_type == "product" && category->title == $category]{
            _id,
            name,
            "slug": slug.current,
            description,
            price,
            variations[]{
              _key,
              quantity,
              color
            },
            inStock,
            rating,
            availablequantity,
            "categories": category->{
              _id,
              title,
              description
            },
            images
          }`;
  const params = { category };
  const data = await sanityClient.fetch(query, params);

  return data;
}
export async function getProductsByColor(color) {
  const query = `*[_type == "product" && $color in variations[].color]{
      _id,
      name,
      "slug": slug.current,
      description,
      price,
      variations[]{
        _key,
        quantity,
        color
      },
      inStock,
      rating,
      availablequantity,
      "categories": category->{
        _id,
        title,
        description
      },
      images
    }`;

  return await sanityClient.fetch(query, { color });
}
export async function getEachProducts(slug) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    name,
    _id,
    "slug": slug.current,
    description,
    price,
    availablequantity,
    category->{title, slug},
    variations[]{
      color 
    },
    images[]{
      asset->{
        url
      }
    },
    ratings,
    inStock
  
  }`;

  const data = await sanityClient.fetch(query, { slug });

  return data;
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
