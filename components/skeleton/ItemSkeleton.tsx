import React from 'react';

const ItemSkeleton = () => {
  return (
    <div className="border grid grid-cols-1 md:grid-cols-2 gap-6 p-10 animate-pulse">
      {/* Left Section (Image Placeholder) */}
      <div className="bg-gray-300 h-96 rounded-md"></div>

      {/* Right Section (Details) */}
      <div className="space-y-4">
        {/* Title */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>

        {/* Description */}
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>

        {/* Price */}
        <div className="h-8 bg-gray-300 rounded w-1/4"></div>

        {/* Select Color */}
        <div>
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="flex space-x-2">
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Select Quantity */}
        <div>
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-10 bg-gray-300 rounded w-1/2"></div>
        </div>

        {/* Add to Cart Button */}
        <div className="h-12 bg-gray-300 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export default ItemSkeleton;
