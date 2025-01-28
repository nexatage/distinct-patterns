import sanityClient from "./sanityClient";

export async function getProducts() {
  const query = `*[_type == "product"  ]{
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
    isfabric
  
  }`;

  return await sanityClient.fetch(query);
}

export async function getFabrics() {
  const query = `*[_type == "product" && isfabric == true ]{
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
    isfabric
  
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
            isfabric,
            ratings,
            availablequantity,
           category->{title, slug},
               images[]{
      asset->{
        url
      }
    }
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
      isfabric,
      ratings,
      availablequantity,
      "categories": category->{
        _id,
        title,
        description
      },
       images[]{
      asset->{
        url
      }
    }
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
    isfabric
  
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

// Pagination

const fetchProductsQuery = `*[_type == "product"] | order(_createdAt desc) [$start...$end] {
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
    isfabric
}`;
export const fetchPaginatedProducts = async (start, limit) => {
  const end = start + limit;
  return await sanityClient.fetch(fetchProductsQuery, { start, end });
};
