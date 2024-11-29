import React from "react";
import ProductFilterSidebar from "@/components/ProductSidebar";
import Allproducts from "@/components/Product";
const Product = () => {
  return (
    <div className="p-10 pt-0">
      <h1 className="text-3xl sm:text-[clamp(50px,5vw,70px)] font-[600] m-2 mb-6">ALL PRODUCTS</h1>
      <div className="flex">
        <div className="">
          {/* side bar */}
          <ProductFilterSidebar />
        </div>
        <div className="flex-1 justify-between m-auto">
          {/* Products */}
          <Allproducts />
        </div>
        {/* Our best seller  */}
        {/* Footer */}
      </div>
    </div>
  );
};

export default Product;
