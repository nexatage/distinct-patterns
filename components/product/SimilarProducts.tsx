"use client";
import ProductCard from "@/components/cards/ProductCard";
import { getProductsByCategory } from "@/sanity/products";
import icon4 from "@/public/Arrow 1.svg";
import { useEffect, useState } from "react";
import Image from "next/image";
export const SimilarProducts = ({
  category,
  id,
}: {
  category: { title?: string };
  id: string;
}) => {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getProductsByCategory(category.title);

      setSimilarProducts(data);
    })();
  }, [category.title]);
  console.log(similarProducts.length)
  if (similarProducts.length == 1){
    return (
      <div className="w-full my-[6rem]">
           <Image
          alt="nothing"
          src="/assets/nothin_here.svg"
          width={400}
          height={400}
          className="m-auto mb-[3rem]"
        />
        <div className="font-semibold text-center">No Similar Product</div>{" "}
      </div>
    )};
  return (
    <section className="mt-20">
      <div className="flex flex-row justify-between items-start mt-28 mb-12">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-5xl sm:text-7xl font-bold leading-none">
            Similar
            <br />
            <span className="text-gray-400">Products</span>
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
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.slice(0, 5).map(
            (product) =>
              product._id !== id && (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
             )
          )}
        </div>
      </div>
    </section>
  );
};
