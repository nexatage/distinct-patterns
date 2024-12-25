import ProductCard from "@/components/cards/ProductCard";
import { getProducts } from "@/sanity/products";
import icon4 from "@/public/Arrow 1.svg";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton"
export const BestSellers = () => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getProducts();

      // Calculate the average rating for each product
      const sortedProducts = data
        .map((product) => {
          const ratings = product.ratings || []; // Handle cases where ratings may not exist
          const avgRating =
            ratings.length > 0
              ? ratings.reduce((sum, rating) => sum + rating, 0) /
                ratings.length
              : 0;
          return { ...product, avgRating };
        })
        .sort((a, b) => b.avgRating - a.avgRating) // Sort by average rating in descending order
        .slice(0, 5); // Get the top 5 products

      setTopProducts(sortedProducts);
    })();
  }, []);

  return (
    <section className="mt-20">
      <div className="flex flex-row justify-between items-start mt-28 mb-12">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-5xl sm:text-7xl font-bold leading-none">
            Our Best
            <br />
            <span className="text-gray-400">Sellers</span>
          </h1>
        </div>
        <div className="hidden md:block max-w-xs mt-9">
          <p className="text-xs leading-tight mb-4">
            A SIMPLE CLEAN, SUPER FAST HIGHLY FLEXIBLE, LIGHT MODERN THEME THAT
            CAN ENHANCE THE LOOK AND FUNCTIONALITY. PERFECT BLEND OF FASHION AND
            COMFORTABLE CLOTHS.
          </p>
          <Image src={icon4} alt="arrow" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {topProducts.length > 0  ? topProducts.map((product) => (
         
       <ProductCard key={product._id} product={product} />

        )) :<ProductSkeleton/> }
      </div>
      {/* 
      
      */}
    </section>
  );
};
