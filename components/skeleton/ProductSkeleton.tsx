const ProductSkeleton = () => {
  return (
    <div className=" w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className=" flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md animate-pulse">
        {/* Image Skeleton */}
        <div className="w-full h-48 bg-gray-300 rounded-md"></div>

        {/* Title Skeleton */}
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>

        {/* Price Skeleton */}
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>

        {/* Button Skeleton */}
        <div className="w-1/3 h-8 bg-gray-300 rounded"></div>
      </div>

      <div className=" flex flex-col gap-4 p-4 w-full bg-white rounded-lg shadow-md animate-pulse">
        {/* Image Skeleton */}
        <div className="w-full h-48 bg-gray-300 rounded-md"></div>

        {/* Title Skeleton */}
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>

        {/* Price Skeleton */}
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>

        {/* Button Skeleton */}
        <div className="w-1/3 h-8 bg-gray-300 rounded"></div>
      </div>

      <div className=" flex flex-col gap-4 p-4 w-full bg-white rounded-lg shadow-md animate-pulse">
        {/* Image Skeleton */}
        <div className="w-full h-48 bg-gray-300 rounded-md"></div>

        {/* Title Skeleton */}
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>

        {/* Price Skeleton */}
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>

        {/* Button Skeleton */}
        <div className="w-1/3 h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
