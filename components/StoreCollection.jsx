"use client";
import React, { useState, useEffect } from "react";
import { Image } from "next/image";
import Allproducts from "@/components/Product";
import { getProducts } from "@/sanity/products";
const StoreCollection = () => {
  const [allproducts, setAllProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();
        setAllProducts(data);
      } catch (error) {
        console.error("Failed to fetch all products:", error);
      }
    })();
  }, []);
  return (
    <div>
      <section className="mt-5 md:mt-14">
        <div className="flex flex-row justify-between items-start mt-5 md:mt-28 mb-5 md:mb-12">
          <div className="mb-6 lg:mb-0 ">
            <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold leading-none">
              Store Collection
            </h1>
          </div>
          <div className="hidden md:block max-w-xs mt-9">
            <p className="text-sm leading-tight mb-4">
              Browse our range of hand-picked items, designed to capture your
              unique style. our store collection has something for every
              occasion.
            </p>
          </div>
        </div>
      </section>
      <div className="flex-1 justify-between m-auto">
        <Allproducts products={allproducts.slice(0, 6)} />
      </div>
    </div>
  );
};

export default StoreCollection;
