"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/sanityImage";
import { useCart } from "@/context/StateContext";
import { calculateAverageRating } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { lightenColor } from "@/lib/utils";
const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, checkIfProductExists } = useCart();
  const { toast } = useToast();

  // Memoized value for whether the product exists in the cart
  const showAddCart = React.useMemo(() => {
    return !checkIfProductExists(product._id);
  }, [product._id, checkIfProductExists]);

  // Handle adding/removing product
  const handleCartAction = () => {
    if (showAddCart) {
      toast({
        description: "Added to Cart",
      });
      addToCart(product,product?.variations[0]?.color);
    } else {
      toast({
        description: "Removed from Cart",
      });
      removeFromCart(product);
    }
  };
  const averageRating = calculateAverageRating(product.ratings);

  return (
    <div>
      <div key={product.id} className="overflow-hidden  rounded-md">
        {/* Product Image */}
        <div className="p-0 relative">
          <Image
            width={100}
            height={100}
            src={urlFor(product.images[0]).quality(100).url()}
            alt={product.name}
            className="h-[300px] w-full object-cover "
          />
          {/* Color Variants Overlay */}
          <div className="absolute bottom-2 left-2 flex gap-2 bg-white/90 p-2  rounded-2xl">
            {product.variations.map(({ color },index) => (
              <div
                key={`${color}-${index}`}
                className="h-5 w-5 rounded-full border border-gray-300"
                style={{
                  backgroundColor: color,
                }}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex  flex-col items-start space-y-2 py-4 px-4">
          {/* Product Name */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-lg font-thin text-gray-700">{product.name}</h3>
          </Link>

          {/* Pricing */}
          <div className="flex items-left gap-2">
            <span className=" text-sm font-thin text-gray-900">
              ₦ {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm line-through text-gray-400">
                ${product.originalPrice}USD
              </span>
            )}
          </div>

          {/* Ratings */}
          <div className="flex  w-full  justify-between items-center flex-row-reverse">
            <div className="flex items-start">
              {[...Array(Math.round(+averageRating))].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    "fill-yellow-400 text-yellow-400"
                     
                  }`}
                />
              ))}
            </div>

            {/* Add to Cart Button */}
            <div
              className="w-full cursor-pointer text-left text-black text-md font-medium py-2 rounded-md "
              onClick={handleCartAction}
            >
              {showAddCart ? (
                <div className=" flex items-center justify-start gap-2">
                  <span>Add to Cart</span>
                  <span className="text-lg font-bold">+</span>
                </div>
              ) : (
                <div className=" flex items-center justify-start gap-2">
                  <span>Remove</span>
                  <span className="text-lg font-bold">+</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
