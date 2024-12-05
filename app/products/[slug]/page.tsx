"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/sanityImage";
import ProductCard from "@/components/cards/ProductCard";
import { useParams } from "next/navigation";
import { getEachProducts } from "@/sanity/products";
import { useCart } from "@/context/StateContext";

interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  availablequantity: number;
  variations: [];
  inStock: boolean;
  availableQuantity: number;
  images: { asset: { url: string } }[];
}
const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams();

  const { cartItems, checkIfProductExists } = useCart();
  useEffect(() => {
    if (product?.variations?.length > 0) {
      // Assuming each variation object has a `color` property
      const firstColor = product.variations[0]?.color;
      if (firstColor) {
        setSelectedColor(firstColor);
      }
    }
  }, [product]);
  // Helper function to find a product in the cart
  const getProductInCart = (productId: string | undefined) => {
    return cartItems.find((item) => item._id === productId) || null;
  };

  useEffect(() => {
    const fetchAndSetProduct = async () => {
      try {
        const fetchedProduct = await getEachProducts(slug);
        if (!fetchedProduct) throw new Error("Product not found");

        // Check if the product is in the cart and set accordingly
        const productFromCart = getProductInCart(fetchedProduct._id);
        const finalProduct = productFromCart || fetchedProduct;

        setProduct(finalProduct);

        // Set the main image if available
        if (finalProduct?.images?.length > 0) {
          setMainImage(urlFor(finalProduct.images[0].asset.url).url());
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch product");
      }
    };

    fetchAndSetProduct();
  }, [slug, cartItems]);
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductImages
          images={product.images}
          mainImage={mainImage}
          setMainImage={setMainImage}
        />
        <ProductDetails
          product={product}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          toggleLike={() => setIsLiked(!isLiked)}
        />
      </div>
      {/* <SimilarProducts similarProducts={product.variations || []} /> */}
    </div>
  );
};

export default ProductPage;

const ProductDetails = ({
  selectedColor,
  setSelectedColor,
  product,
  isLiked,
  setIsLiked,
  toggleLike,
}: {
  product: Product;
  selectedColor: string;
  isLiked: boolean;
  setIsLiked: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
  toggleLike: () => void;
}) => {
  const { addToCart, setQuantity, removeFromCart, checkIfProductExists } =
    useCart();
  // Memoized value for whether the product exists in the cart
  const showAddCart = React.useMemo(() => {
    return !checkIfProductExists(product._id);
  }, [product._id, checkIfProductExists]);

  const increaseQty = (item) => {
    setQuantity(item._id, item.quantity + 1);
  };
  const decreaseQty = (item) => {
    setQuantity(item._id, item.quantity - 1);
  };
  const handleCartAction = () => {
    if (showAddCart) {
      addToCart(product,selectedColor);
    } else {
      removeFromCart(product);
    }
  };
  return (
    <div className="space-y-6 flex flex-col justify-between h-full pt-6">
      <div className="space-y-11">
        <div className="space-y-7">
          <p className="text-[#C0C0C0] font-bold text-[18px]">
            Latest Collection
          </p>
          <h1 className="text-[58px] font-semibold">{product.name}</h1>
          <p className="text-[#8D8D8D] font-medium">{product.description}</p>
          <p className="text-[35px] text-[#8F8F8F] font-semibold">
            ₦ {product.price.toLocaleString()}
          </p>
        </div>

        {/* Size Selection */}
        {/* <div className="space-y-6">
          <p className="font-bold text-[#A7A7A7] text-[18px]">Sizes</p>
          <div className="flex gap-2">
        {product.sizes.map((size) => (
          <Button
            key={size}
            variant={selectedSize === size ? "default" : "outline"}
            className="h-10 w-10 p-0"
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>
        </div> */}

        {/* Color Selection */}
        <div className="space-y-7">
          <p className="font-bold text-[#9A9A9A] text-[18px]">Select Color</p>
          <div className="flex gap-2">
            {product.variations.map(({ color }) => (
              <Button
                key={color}
                variant={selectedColor === color ? "default" : "outline"}
                className="px-4"
                onClick={() => {setSelectedColor(color)}}
              >
                {color}
              </Button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="space-y-7">
          <p className="font-bold text-[#9A9A9A] text-[18px]">
            Select Quantity
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                disabled={showAddCart || product.quantity <= 1}
                onClick={() => decreaseQty(product)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">
                {!showAddCart ? product.quantity : "Add"}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                disabled={
                  showAddCart || product.quantity >= product.availablequantity
                }
                onClick={() => increaseQty(product)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex gap-4">
        <Button
          className="flex-1 bg-black text-white hover:bg-black/90"
          onClick={() => handleCartAction()}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          {showAddCart ? "Add to Cart" : "Remove from Cart"}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "rounded-full transition-colors",
            isLiked && "bg-red-50 border-red-200"
          )}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              isLiked && "text-red-500 fill-red-500"
            )}
          />
        </Button>
      </div>
    </div>
  );
};

const ProductImages = ({
  images,
  mainImage,
  setMainImage,
}: {
  images: { asset: { url: string } }[];
  mainImage: string | null;
  setMainImage: React.Dispatch<React.SetStateAction<string | null>>;
}) => (
  <div className="space-y-4">
    <div className="relative aspect-[4/5]">
      <Image
        src={mainImage}
        alt={"Main product Image"}
        fill
        className="object-cover rounded-lg"
      />
    </div>
    <div className="grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <button
          key={index}
          className="relative aspect-square"
          onClick={() => setMainImage(urlFor(image.asset.url).url())}
        >
          <Image
            src={urlFor(image.asset.url).url()}
            alt={`main image view ${index + 1}`}
            fill
            className={cn(
              "object-cover rounded-lg",
              mainImage === urlFor(image.asset.url).url() && "ring-2 ring-black"
            )}
          />
        </button>
      ))}
    </div>
  </div>
);

const SimilarProducts = ({
  similarProducts,
}: {
  similarProducts: Product[];
}) => (
  <section className="mt-20">
    <h1 className="text-5xl sm:text-7xl font-bold leading-none mb-12">
      Similar <span className="text-gray-400">Products</span>
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {similarProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  </section>
);

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={cn(
          "h-4 w-4",
          i < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 fill-gray-300"
        )}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);
