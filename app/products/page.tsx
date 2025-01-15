"use client";
import React, { useState, useEffect,useRef  } from "react";
import ProductFilterSidebar from "@/components/product/ProductSidebar";
import Allproducts from "@/components/product/Product";
import {
  fetchPaginatedProducts,
  getProducts,
  getProductsByCategory,
  getProductsByColor,
} from "@/sanity/products";
import Image from "next/image";
import ScrollToTop from "react-scroll-up";
import { useSearchParams } from "next/navigation";
import icon from "@/public/Arrow 1.svg";
import { BestSellers } from "@/components/product/BestSellers";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useQueryState } from "nuqs";
import { parseAsInteger } from "nuqs";
const Product = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useQueryState(
    "currentPage",
    parseAsInteger.withDefault(1)
  );
  const itemsPerPage = 3;
  // Pagniations
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleNextPage = () => {
    if (allproducts.length >= itemsPerPage || products.length >= itemsPerPage) {
      setCurrentPage((prev) => prev + 1);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
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
        const start = (currentPage - 1) * itemsPerPage;
        const data = await fetchPaginatedProducts(start, itemsPerPage);
        setAllProducts(data);
      } catch (error) {
        console.error("Failed to fetch all products:", error);
      }
    })();
  }, [currentPage]);

  // Fetch products based on query parameters
  useEffect(() => {
    (async () => {
      try {
        const decodedCategory = decodeURIComponent(categoryquery);
        const decodedColor = decodeURIComponent(colorquery);
        let data;

        if (!categoryquery && !colorquery) {
          const start = (currentPage - 1) * itemsPerPage;
          data = await fetchPaginatedProducts(start, itemsPerPage);
        } else if (categoryquery) {
          data = await getProductsByCategory(decodedCategory);
        } else if (colorquery) {
          data = await getProductsByColor(decodedColor);
        } else {
          const start = (currentPage - 1) * itemsPerPage;
          data = await fetchPaginatedProducts(start, itemsPerPage);
        }

        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch filtered products:", error);
      }
    })();
  }, [categoryquery, colorquery, currentPage]);

  return (
    <div className="p-10 pt-0" >
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
      {/* Pagniation */}
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={handlePreviousPage}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="cursor-pointer">
                {currentPage}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              {/* <ScrollToTop showUnder={160}> */}
                <PaginationNext
                  className="cursor-pointer"
                  onClick={handleNextPage}
                />
              {/* </ScrollToTop> */}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      {/* Our Best Seller */}

      <BestSellers />
    </div>
  );
};

export default Product;
