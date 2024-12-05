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

import { useCart } from "@/context/StateContext";

import { urlFor } from "@/sanity/sanityImage";
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
        <h1 className="text-3xl  tracking-tight text-gray-900 sm:text-4xl">
          Check your cart and checkout
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
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
                  <li key={item._id} className="flex py-6 sm:py-10">
                    <div className="shrink-0">
                      <Image
                        width={150}
                        height={150}
                        src={urlFor(item.images[0].asset.url).quality(100).url()}
                        alt={item.name}
                        className="h-[300px] w-full object-cover"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a
                                href={item.slug}
                                className="font-medium text-gray-700 hover:text-gray-800"
                              >
                                {item.name}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-500">
                              {item.variations.color}
                            </p>

                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              {item.variations.quantity}
                            </p>
                          </div>
                          <p className="mt-1 text-sm font-medium text-gray-900">
                            ₦ {item.price}
                          </p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
                          <label
                            htmlFor={`quantity-${itemIdx}`}
                            className="sr-only"
                          >
                            Quantity, {item.name}
                          </label>
                          <div className="flex items-center space-x-2">
                            <button
                              className="bg-gray-300 px-2 rounded cursor-pointer"
                              onClick={() => decreaseQty(item)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="bg-gray-300 px-2 rounded cursor-pointer"
                              onClick={() => increaseQty(item)}
                              disabled={item.quantity >= item.availablequantity}
                            >
                              +
                            </button>
                          </div>
                          <div
                            className="absolute right-0 top-0"
                            onClick={() => removeFromCart(item)}
                          >
                            <button
                              type="button"
                              className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Remove</span>
                              <XMarkIcon
                                aria-hidden="true"
                                className="size-5"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 flex space-x-2 text-sm text-gray-700">
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
                          {item.inStock ? "In stock" : `Out of Stock`}
                        </span>
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <div className="  my-4 text-center">
                  Nothing is here, your cart is empty
                </div>
              )}
            </ul>
            <div className=" underline my-4 text-center">
              <Link href="/products"> Continue Shopping</Link>
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
              <div className="flex items-center justify-between border-gray-200 pt-4">
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
                  $ {totalPrice}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
