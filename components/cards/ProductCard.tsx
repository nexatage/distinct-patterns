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
const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, checkIfProductExists } = useCart();

  // Memoized value for whether the product exists in the cart
  const showAddCart = React.useMemo(() => {
    return !checkIfProductExists(product._id);
  }, [product._id, checkIfProductExists]);

  // Handle adding/removing product
  const handleCartAction = () => {
    if (showAddCart) {
      addToCart(product);
    } else {
      removeFromCart(product);
    }
  };
  const averageRating = calculateAverageRating(product.ratings);

  return (
    <div>
      <Card key={product.id} className="overflow-hidden border-none">
        <CardContent className="p-0">
          <Image
            width={150}
            height={150}
            src={urlFor(product.images[0]).quality(100).url()}
            alt={product.name}
            className="h-[300px] w-full object-cover"
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 p-4">
          <div className="flex w-full items-center justify-between">
            <Link href={`/products/${product.slug}`}>
              <h3 className="font-semibold">{product.name}</h3>
            </Link>
            <span className="text-sm"> ${product.price}</span>
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(+averageRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="gap-1 flex">
              {product.variations.map(({ color }) => (
                <div
                  key={color}
                  className="h-4 w-4 rounded-full border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </CardFooter>
        <Button
          className="w-full rounded-t-none p-6 "
          onClick={() => handleCartAction()}
        >
          {showAddCart ? "Add to Cart" : "Remove from Cart"}
        </Button>
      </Card>
    </div>
  );
};

export default ProductCard;
