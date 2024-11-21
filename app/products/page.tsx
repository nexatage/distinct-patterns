import React from "react";
import ProductCart from "../../components/ProductCart.jsx";
const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    color: "White and black",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-related-product-01.jpg",

    price: 140,
  },
  {
    id: 2,
    name: "Zip Tote Basket",
    color: "White and black",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-related-product-01.jpg",

    price: 140,
  },
  {
    id: 3,
    name: "Zip Tote Basket",
    color: "White and black",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-related-product-01.jpg",

    price: 140,
  },
  {
    id: 4,
    name: "Zip Tote Basket",
    color: "White and black",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-related-product-01.jpg",

    price: 140,
  },
  // More products...
];
const page = () => {
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
