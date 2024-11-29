import React from "react";
import ProductFilterSidebar from "@/components/ProductSidebar";
import Allproducts from "@/components/Product";
import Image from "next/image";
import icon from "@/public/Arrow 1.svg"

const Product = () => {
  return (
    <div className="p-10 pt-0">
      <h1 className="text-3xl sm:text-[clamp(50px,5vw,70px)] font-[600] m-2 mb-6">
        ALL PRODUCTS
      </h1>
      <div className="flex">
        <div className="">
          {/* side bar */}
          <ProductFilterSidebar />
        </div>
        <div className="flex-1 justify-between m-auto">
          {/* Products */}
          <Allproducts />
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
            A SIMPLE CLEAN, SUPER FAST HIGHLY FLEXIBLE, LIGHT MODERN THEME THAT CAN ENHANCE THE LOOK AND FUNCTIONALITY. PERFECT BLEND OF FASHION AND COMFORTABLE CLOTHS.
          </p>
          <Image src={icon} alt="arrow"/>
        </div>
      </div>
      <Allproducts />
      {/* Footer */}
    </div>
  );
};

export default Product;
