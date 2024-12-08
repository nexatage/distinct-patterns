"use client";
import React, { useMemo } from "react";
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/StateContext";
import dynamic from "next/dynamic";
import { urlFor } from "@/sanity/sanityImage";
const PaystackButton = dynamic(() => import("@/components/PayStackButton"), {
  ssr: false, // Ensure this component is only rendered on the client
});
export default function Page() {
  const { cartItems, removeFromCart, totalPrice, setQuantity } = useCart();
  const increaseQty = (item) => {
    setQuantity(item._id, item.quantity + 1);
  };
  const decreaseQty = (item) => {
    setQuantity(item._id, item.quantity - 1);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
          Check your cart and checkout
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          {/* Cart items section */}
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {cartItems.length > 0 ? (
                cartItems.map((item, itemIdx) => (
                  <li key={item._id} className="flex flex-col py-6 sm:py-10">
                    <div className="shrink-0">
                      <Image
                        width={150}
                        height={150}
                        src={urlFor(item.images[0].asset.url)
                          .quality(100)
                          .url()}
                        alt={item.name}
                        className="h-[300px] w-full object-cover rounded-md"
                      />
                    </div>

                    <div className="flex flex-col space-y-8 mt-[1rem]">
                      <div className="space-y-4">
                        <h3 className="text-[35px] font-semibold text-gray-700 hover:text-gray-800">
                          {item.name}
                        </h3>
                        <Button className="px-4 text-white">
                          {item.selectedColor}
                        </Button>
                        <p className="text-[25px] text-[#8F8F8F] font-semibold">
                          ₦ {item.price.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10"
                            disabled={item.quantity <= 1}
                            onClick={() => decreaseQty?.(item)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10"
                            disabled={item.quantity >= item.availablequantity}
                            onClick={() => increaseQty?.(item)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <button
                          type="button"
                          className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => removeFromCart?.(item)}
                        >
                          <span className="sr-only">Remove</span>
                          <XMarkIcon aria-hidden="true" className="size-5" />
                        </button>
                      </div>

                      <p className="mt-4 flex items-center space-x-2 text-sm text-gray-700">
                        {item.inStock ? (
                          <CheckIcon
                            aria-hidden="true"
                            className="size-5 shrink-0 text-green-500"
                          />
                        ) : (
                          <ClockIcon
                            aria-hidden="true"
                            className="size-5 shrink-0 text-gray-300"
                          />
                        )}
                        <span>
                          {item.inStock ? "In stock" : "Out of Stock"}
                        </span>
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <div className="my-4 text-center">
                  Nothing is here, your cart is empty
                </div>
              )}
            </ul>
            <div className="underline my-4 text-center">
              <Link href="/products">Continue Shopping</Link>
            </div>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order summary
            </h2>
            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a
                    href="#"
                    className="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      aria-hidden="true"
                      className="size-5"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$0.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a
                    href="#"
                    className="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how tax is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      aria-hidden="true"
                      className="size-5"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$0.00</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  $ {totalPrice.toLocaleString()}
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <PaystackButton
                email={"abdulrahmansoyooye@gmail.com"}
                amount={totalPrice}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
