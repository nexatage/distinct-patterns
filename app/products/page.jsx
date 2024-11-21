import React from "react";
import ProductCart from "../../components/ProductCart.jsx";
import { getProducts } from "../../sanity/products.js";

const page = async () => {
  const products = await getProducts();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Products Sold</h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <div key={index}>
              <ProductCart product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
