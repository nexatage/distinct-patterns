"use client";
import React, { useMemo } from "react";

import { useCart } from "../context/StateContext.js";
// import { urlFor } from "../sanity/sanityImage.js";
const ProductCart = ({ product }) => {
  const { addToCart, removeFromCart, checkIfProductExists } = useCart();

  // Memoized value for whether the product exists in the cart
  const showAddCart = useMemo(() => {
    return !checkIfProductExists(product._id);
  }, [product._id, checkIfProductExists]);

  // Handle adding/removing product
  const handleCartAction = () => {
    if (showAddCart) {
      addToCart(product);
    } else {
      removeFromCart(product);
    }
  };
  return (
    <div key={product._id}>
      <div className="relative">
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <img
            alt={product.slug}
            width={500}
            height={500}
            src={
              "https://images.unsplash.com/photo-1667851873721-7e319b4f8633?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9zZXN8ZW58MHx8MHx8fDA%3D"
            }
            className="size-full object-cover"
          />
        </div>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          {/* <p className="mt-1 text-sm text-gray-500">{product.category.title}</p> */}
        </div>
        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          <p className="relative text-lg font-semibold text-white">
            ${product.price}
          </p>
        </div>
      </div>
      <div className=" mt-6">
        <div
          onClick={() => handleCartAction(product)}
          className="relative flex items-center  justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 cursor-pointer"
        >
          {showAddCart ? "Add to Cart" : "Remove from Cart"}
          <span className="sr-only">, {product.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
