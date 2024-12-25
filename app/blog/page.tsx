"use client";
import  React, { useState,useEffect,useMemo} from "react";
import Image from "next/image";
import brand from "@/public/assets/brand.jpg";
import {
  getBlogs,
  getBlogsByCategory,
} from "@/sanity/blogs";
import  Link  from 'next/link';
import { urlFor } from "@/sanity/sanityImage";

import { useQueryState } from "nuqs";
import ItemSkeleton from "@/components/skeleton/ItemSkeleton"

const Page = () => {
  const [allposts, setAllposts] = useState([]);
  const [posts, setPosts] = useState([]);

  const [categoryquery, setCategoryQuery] = useQueryState("category", {
    defaultValue: "",
  });

  // Extract categories and colors from products
  const getCategories = useMemo(() => {
    if (!allposts.length) return [];
    return allposts.reduce((accumulator, item) => {
      const category = item?.category?.title;
      if (category && !accumulator.includes(category)) {
        accumulator.push(category);
      }
      return accumulator;
    }, []);
  }, [allposts]);



  // Fetch all products on component mount
  useEffect(() => {
    (async () => {
      try {
        const data = await getBlogs();
        setAllposts(data);
      } catch (error) {
        console.error("Failed to fetch all products:", error);
      }
    })();
  }, []);

  // Fetch products based on query parameters
  useEffect(() => {
    (async () => {
      try {
        const decodedCategory = decodeURIComponent(categoryquery);
      
        let data;

        if (categoryquery) {
          data = await getBlogsByCategory(decodedCategory);
        }else {
          data = await getBlogs();
        }

        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch filtered products:", error);
      }
    })();
  }, [categoryquery]);
  console.log(posts)
  return (
    <div className="p-10 pt-0">
      <h1 className="text-5xl md:text-[50px] [@media(min-width:1230px)]:text-[70px] font-bold tracking-tight mb-5">
        OUR
        <br />
        <span className="text-[#999999] relative inline-flex items-center">
          EXCLUSIVE BLOG
        </span>
      </h1>
      {/* Categories */}
      <div className="flex gap-[1rem] flex-wrap">
        <Link href={"/blog"}  className="cursor-pointer hover:bg-black hover:text-white transition-color  border rounded-full p-3 ">ALL ARTICLES</Link>
        {getCategories.map((item, index) => (
          <div
            className={`cursor-pointer hover:bg-black hover:text-white transition-color  border rounded-full p-3 ${item == categoryquery && "bg-black text-white"}`}
            key={`${item}-${index}`}
            onClick={()=>setCategoryQuery(item)}
          >
            {item.toUpperCase()}
          </div>
        ))}
      </div>

      {/* Blog Posts */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  pt-8">
        {posts.length > 0 ? posts.map(({publishedDate,title,description,image}, index) => (
          <div
            key={`${publishedDate}-${index}`}
            className="bg-white rounded-md overflow-hidden  max-md:w-full"
          >
            <Image
              src={urlFor(image.asset.url).url()}
              width={300}
              height={300}
              alt="Modern Dresses"
              className="w-full h-[400px] object-cover rounded-md mb-2"
            />
            <div className="">
              <p className="text-sm text-[#999999] mb-2">
               {publishedDate}
              </p>
              <h3 className="text-2xl font-semibold mb-2">
               {title}
              </h3>
              <p className="text-[#999999] text-md">
               {description}
              </p>
            </div>
          </div>
        )): <ItemSkeleton/>}
      </div>

    
    </div>
  );
};

export default Page;
