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

const Product = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch query parameters
  const searchParams = useSearchParams();
  const categoryquery = searchParams.get("category") || "";
  const colorquery = searchParams.get("color") || "";

  // Extract categories and colors from products
  const getCategories = React.useMemo(() => {
    if (!allproducts.length) return [];
    return allproducts.reduce((accumulator, item) => {
      const category = item?.category?.title;
      if (category && !accumulator.includes(category)) {
        accumulator.push(category);
      }
      return accumulator;
    }, []);
  }, [allproducts]);

  const getColors = React.useMemo(() => {
    if (!allproducts.length) return [];
    return allproducts.reduce((colorSet, product) => {
      product?.variations?.forEach((variation) => {
        if (variation?.color && !colorSet.includes(variation.color)) {
          colorSet.push(variation.color);
        }
      });
      return colorSet;
    }, []);
  }, [allproducts]);

  // Fetch all products on component mount
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

  // Fetch products based on query parameters
  useEffect(() => {
    (async () => {
      try {
        const decodedCategory = decodeURIComponent(categoryquery);
        const decodedColor = decodeURIComponent(colorquery);
        let data;

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
      } catch (error) {
        console.error("Failed to fetch filtered products:", error);
      }
    })();
  }, [categoryquery, colorquery]);

  return (
    <div className="p-10 pt-0">
      <h1 className="text-3xl sm:text-[clamp(50px,5vw,70px)] font-[600] m-2 mb-6">
        ALL PRODUCTS
      </h1>
      <div className="flex">
        {/* Sidebar */}
        <div>
          <ProductFilterSidebar
            allCategories={getCategories}
            allColors={getColors}
          />
        </div>
        {/* Product List */}
        <div className="flex-1 justify-between m-auto">
          <Allproducts products={products} />
        </div>
      </div>
      {/* Our Best Seller */}
      <div className="flex flex-row justify-between items-start mt-28 mb-12">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-5xl font-bold leading-none sm:text-7xl">
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
      {/* Render products again for Best Sellers */}
      <Allproducts products={products} />
    </div>
  );
};

export default Product;
