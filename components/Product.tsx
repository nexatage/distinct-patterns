
"use client";
import * as React from "react";

import ProductCard from "@/components/cards/ProductCard";

export default function Allproducts({ products }) {
  return (
    <div className="container min-h-screen m-auto bg-background">
      <div className="container px-4 py-6 md:px-6 lg:px-8">
        <div>
          {/* Product Grid */}
          <div className="">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
