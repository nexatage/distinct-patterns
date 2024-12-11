import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Brand = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-4 mt-12 lg:flex-row lg:gap-12 lg:px-12 lg:mt-24">
      {/* Text Box */}
      <div className="order-1 w-full text-left text-box lg:w-1/2 lg:order-2">
        <h2 className="mb-6 text-3xl font-semibold leading-tight text-gray-800 md:text-5xl lg:text-6xl">
          OUR BRAND <span className="text-gray-500">STORY</span>
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-gray-700 uppercase md:text-lg lg:text-xl">
          Introducing our latest T-shirt, where comfort meets originality.
          Crafted from premium quality cotton, this T-shirt is designed to
          redefine your casual style. The soft and breathable cotton material
          ensures maximum comfort.
        </p>
        <Button 
          variant="outline" 
          className="group border-black hover:bg-black hover:text-white transition-colors"
        >
          <Link href="/products" className="flex">
          SHOP NOW
          <ArrowRight className="mt-[2px] ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Image Box */}
      <div className="flex order-2 w-full img-box lg:w-1/2 lg:justify-center lg:order-1">
        <img
          src="/assets/brand.jpg"
          alt="brand_story"
          className="object-contain w-full h-auto lg:w-2/3"
        />
      </div>
    </div>
  );
};

export default Brand;
