import ProductCard from "@/components/cards/ProductCard";
import { getProductsByCategory } from "@/sanity/products";
import icon4 from "@/public/Arrow 1.svg"
import { useEffect, useState } from "react";
import Image from "next/image";
export const SimilarProducts = ({
  category,
}: {
  category: { title: string };
}) => {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getProductsByCategory(category);

      setSimilarProducts(data);
    })();
  }, [category.title]);
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
          A SIMPLE CLEAN, SUPER FAST HIGHLY FLEXIBLE, LIGHT MODERN THEME
          THAT CAN ENHANCE THE LOOK AND FUNCTIONALITY. PERFECT BLEND OF
          FASHION AND COMFORTABLE CLOTHS.
        </p>
        <Image src={icon4} alt="arrow" />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {similarProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  </section>
  );
};
