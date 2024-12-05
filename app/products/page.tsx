"use client";
import React, { useState, useEffect } from "react";
import ProductFilterSidebar from "@/components/ProductSidebar";
import Allproducts from "@/components/Product";
import {
  getProducts,
  getProductsByCategory,
  getProductsByColor,
} from "@/sanity/products";
import Image from "next/image";
import icon from "@/public/Arrow 1.svg";
import { useQueryState } from "nuqs";
const Product = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategories = allproducts.reduce((accumulator, item) => {
    const category = item.category.title;
    if (!accumulator.includes(category)) {
      accumulator.push(category);
    }
    return accumulator;
  }, []);
  const getColors = allproducts.reduce((colorSet, product) => {
    product.variations.forEach((variation) => {
      if (!colorSet.includes(variation.color)) {
        colorSet.push(variation.color);
      }
    });
    return colorSet;
  }, []);
  const [categoryquery] = useQueryState("category", {
    defaultValue: "",
  });
  const [colorquery] = useQueryState("color", {
    defaultValue: "",
  });
  useEffect(() => {
    (async () => {
      const data = await getProducts();

      setAllProducts(data);
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const decodedCategory = decodeURIComponent(categoryquery || "");
      const decodedColor = decodeURIComponent(colorquery || "");

      let data;

      // Fetch products based on both category and color
      if (!categoryquery && !colorquery) {
        data = await getProducts();
      } else if (categoryquery) {
        data = await getProductsByCategory(decodedCategory);
      } else if (colorquery) {
        data = await getProductsByColor(decodedColor);
      } else {
        data = await getProducts();
      }

      setProducts(data);
    })();
  }, [categoryquery, colorquery]);
  return (
    <div className="p-10 pt-0">
      <h1 className="text-3xl sm:text-[clamp(50px,5vw,70px)] font-[600] m-2 mb-6">
        ALL PRODUCTS
      </h1>
      <div className="flex">
        <div className="">
          {/* side bar */}
          <ProductFilterSidebar
            allCategories={getCategories}
            allColors={getColors}
          />
        </div>
        <div className="flex-1 justify-between m-auto">
          {/* Products */}
          <Allproducts products={products} />
        </div>
      </div>
      {/* Our best seller  */}
      <div className="flex flex-row justify-between items-start mt-28 mb-12">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-5xl sm:text-7xl font-bold leading-none">
            OUR BEST
            <br />
            <span className="text-gray-400">SELLERS</span>
          </h1>
        </div>
        <div className="hidden md:block max-w-xs mt-9">
          <p className="text-xs leading-tight mb-4">
            A SIMPLE CLEAN, SUPER FAST HIGHLY FLEXIBLE, LIGHT MODERN THEME THAT
            CAN ENHANCE THE LOOK AND FUNCTIONALITY. PERFECT BLEND OF FASHION AND
            COMFORTABLE CLOTHS.
          </p>
          <Image src={icon} alt="arrow" />
        </div>
      </div>
      <Allproducts products={products} />
      {/* Footer */}
    </div>
  );
};

export default Product;
