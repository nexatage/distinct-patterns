"use client";
import React from "react";
import { getProducts } from "@/sanity/products";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { urlFor } from "@/sanity/sanityImage";
import { ExternalLink } from 'lucide-react';
import ProductSkeleton from "@/components/skeleton/ProductSkeleton"

const New = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);
  return (
    <section className="w-full py-12 px-4 md:px-6">
      <div className="container mx-auto">
      <div className="flex flex-row justify-between items-start mt-5 md:mt-28 mb-5 md:mb-12">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-5xl sm:text-7xl font-bold leading-none">
            NEW ARRIVALS
          </h1>
        </div>
        <div className="hidden md:block max-w-xs mt-9">
          <p className="text-xs leading-tight mb-4">
          Fresh from our design studio, our new arrivals bring you the latest in Afro-centric fashion. Carefully crafted and thoughtfully designed, these pieces are the perfect way to refresh your wardrobe.
          </p>
        </div>
      </div>
        <div className="grid grid-cols-1 cursor-pointer md:grid-cols-2 gap-[1rem]">
          {products.length > 0 ? products.slice(0,4).map((product) => (
            <div key={product._id} className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={urlFor(product.images[0]).quality(100).url()}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-center mb-4">{product.description}</p>
                <Button
                  asChild
                  variant="secondary"
                  className="mt-2"
                >
                  <Link href={`/products/${product.slug}`} target = "_blank">
                    <p className = "flex gap-2">View product <span><ExternalLink /></span></p> 
                  </Link>
                </Button>
              </div>
            </div>
          )) : <ProductSkeleton/>}
      </div>
        <div className="flex justify-center mt-8">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 hover:bg-black hover:text-white transition-colors duration-300"
          >
            <Link href="/products">
              ALL PRODUCTS
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default New;
