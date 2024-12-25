"use client";
import * as React from "react";

import ProductCard from "@/components/cards/ProductCard";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";

export default function Allproducts({ products }) {
  return (
    <div className="w-full container min-h-screen m-auto bg-background">
      <div className="w-full container px-4 py-6 md:px-6 lg:px-8">
        <div>
          {/* Product Grid */}
          <div className="w-full ">
            <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <ProductSkeleton />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
