import sanityClient from "./sanityClient.js";

export async function getBlogs() {
  const query = `*[_type == "blogPost"]{
     _id,
    title,
    "slug": slug.current,
    description,
    
    category->{title, slug},
    image{
      asset->{
        url
      }
    },
    publishedDate,
  }`;

  return await sanityClient.fetch(query);
}
export async function getBlogsByCategory(category) {
  const query = ` *[_type == "blogPost" && category->title == $category]{
          _id,
    title,
    "slug": slug.current,
    description,
    
    category->{title, slug},
    image{
      asset->{
        url
      }
    },
    publishedDate,
          }`;
  const params = { category };
  const data = await sanityClient.fetch(query, params);

  return data;
}

export async function getEachBlog(slug) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    description,
    
    category->{title, slug},
    image{
      asset->{
        url
      }
    },
    publishedDate,
  }`;

  const data = await sanityClient.fetch(query, { slug });

  return data;
}

export async function getCategory() {
  const query = `*[type == "blogcategory"]{
    _id,
    title,
    slug,
  }`;

  return await sanityClient.fetch(query);
}
