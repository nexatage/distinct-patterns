"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getBlogs } from "@/sanity/blogs";
import { urlFor } from "@/sanity/sanityImage";
import Link from "next/link"
import ItemSkeleton from "@/components/skeleton/ItemSkeleton"

const BlogPostCard = ({ post, size, highlight }) => {
  return (
    <div
      className={`flex justify-center relative cursor-pointer ${size === "large" ? "w-[50%] h-full max-md:w-full" : "w-[50%] max-md:w-full"}`}
    >
      <Image
        width={100}
        height={100}
        src={urlFor(post?.image?.asset?.url)?.url() || ""}
        alt="blog image"
        className={`relative w-full h-full  object-cover rounded-${size === "large" ? "md" : "2xl"}`}
      />
      
      <div
        className={`absolute border ${size === "large" ? "top-4 right-4" : "top-4 right-4"} flex gap-2 bg-white p-3 rounded-2xl`}
      >
        <p className="font-semibold text-[0.6rem]">{post?.time} min Read</p>
      </div>
      <div className="flex bg-white p-3 rounded-2xl gap-[1rem] justify-between flex-wrap absolute bottom-4 w-[90%] m-auto">
      <div className="flex gap-2 ">
          <p className="font-semibold text-sm">{post?.title}</p>
        </div>
      <Link
        href="/blog"
        className={`flex text-white bg-black p-${size === "large" ? "3" : "1"} rounded-full text-[0.9rem]`}
      >
        <p className="font-semibold">{size === "large" ? "Read More" : ""}</p>
        <ArrowUpRight />
      </Link>
      </div>
    </div>
  );
};

const BlogComponent = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getBlogs();
        setAllPosts(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    })();
  }, []);

  if (allPosts.length === 0) {
    return <ItemSkeleton/>;
  }

  const [featuredPost, ...otherPosts] = allPosts;

  return (
    <div className="flex max-md:flex-col lg:h-[700px] mt-8 mb-8 gap-[2rem] p-2 w-full">
      {/* Featured Post */}
      <BlogPostCard post={featuredPost} size="large" highlight />

      {/* Side Content */}
      <div className="w-[50%] max-md:w-full flex flex-col justify-between gap-[1rem]">
        {/* Info Section */}
        <div className="bg-gray-100 h-[50%] rounded-2xl border-2 border-slate-200 p-[1.5rem]">
          <div className="bg-white p-3 mb-5 rounded-2xl font-semibold inline-block">OUR BLOG</div>
          <div className="flex flex-col gap-[1rem]">
            <p className="font-bold text-[2rem] md:text-[2.5rem]">
              DIVE INTO A WORLD OF ENDLESS FASHION POSSIBILITIES
            </p>
            <p className="font-semibold text-sm">
              A SIMPLE CLEAN, SUPER FAST, HIGHLY FLEXIBLE, LIGHT MODERN OUTFIT THAT CAN ENHANCE YOUR LOOK
            </p>
          </div>
        </div>

        {/* Other Posts */}
        <div className="flex gap-[1rem] h-[50%] max-md:flex-col justify-between">
          {otherPosts.slice(0, 2).map((post, index) => (
            <BlogPostCard key={index} post={post} size="small" highlight={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
