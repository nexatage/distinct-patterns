import React from "react";
import ProductFilterSidebar from "@/components/ProductSidebar";
import Allproducts from "@/components/Product";
import Image from "next/image";
import icon from "@/public/Arrow 1.svg";
import Footer from "../../components/Footer";

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
        <div className="justify-between flex-1 m-auto">
          {/* Products */}
          <Allproducts />
        </div>
      </div>
      {/* Our best seller  */}
      <div className="flex flex-row items-start justify-between mb-12 mt-28">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-5xl font-bold leading-none sm:text-7xl">
            OUR BEST
            <br />
            <span className="text-gray-400">SELLERS</span>
          </h1>
        </div>
        <div className="hidden max-w-xs md:block mt-9">
          <p className="mb-4 text-xs leading-tight">
            A SIMPLE CLEAN, SUPER FAST HIGHLY FLEXIBLE, LIGHT MODERN THEME THAT
            CAN ENHANCE THE LOOK AND FUNCTIONALITY. PERFECT BLEND OF FASHION AND
            COMFORTABLE CLOTHS.
          </p>
          <Image src={icon} alt="arrow" />
        </div>
      </div>
      <Allproducts />
      <Footer />
    </div>
  );
};

export default Product;
