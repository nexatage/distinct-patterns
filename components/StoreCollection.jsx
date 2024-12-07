import React from "react";
import AllProducts from "./Product";
import { Image } from "next/image";
const StoreCollection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[5%] items-start">
        <h1 className="section-head self-center lg:self-end leading-tight text-4xl lg:text-[80px] font-semibold text-left text-black flex-none lg:flex-[60%]">
          STORE COLLECTION
        </h1>
        <p className="section-paragraph self-start lg:self-end flex-none lg:flex-[35%] text-sm lg:text-[18px] font-medium leading-5 lg:leading-[25px] text-center lg:text-left text-black pb-3">
          A SIMPLE CLEAN, SUPER FAST HIGHLY FLEXIBLE, LIGHT MODERN THEME THAT
          CAN ENHANCE THE LOOK AND FUNCTIONALITY. PERFECT BLEND OF FASHION AND
          COMFORTABLE CLOTHS.
        </p>
      </div>
      <AllProducts />
    </div>
  );
};

export default StoreCollection;
