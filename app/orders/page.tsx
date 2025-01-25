"use client";
const products = [
  {
    id: 1,
    name: "Nomad Tumbler",
    description:
      "This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.",
    href: "#",
    price: "35.00",
    status: "Preparing to ship",
    step: 1,
    date: "March 24, 2021",
    datetime: "2021-03-24",
    address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    email: "f•••@example.com",
    phone: "1•••••••••40",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/confirmation-page-03-product-01.jpg",
    imageAlt: "Insulated bottle with white base and black snap lid.",
  },
  {
    id: 2,
    name: "Minimalist Wristwatch",
    description:
      "This contemporary wristwatch has a clean, minimalist look and high quality components.",
    href: "#",
    price: "149.00",
    status: "Shipped",
    step: 0,
    date: "March 23, 2021",
    datetime: "2021-03-23",
    address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    email: "f•••@example.com",
    phone: "1•••••••••40",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/confirmation-page-03-product-02.jpg",
    imageAlt:
      "Arm modeling wristwatch with black leather band, white watch face, thin watch hands, and fine time markings.",
  },
  // More products...
];
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { getOrders } from "@/sanity/orders";
import { useUser } from "@clerk/nextjs";
import { formatDate } from "@/constants/index";
import ItemSkeleton from "@/components/skeleton/ItemSkeleton";
import { urlFor } from "@/sanity/sanityImage";
import Image from "next/image";
import React from "react";
export default function Page() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const email =
    user?.primaryEmailAddress?.emailAddress || "abdulrahmansoyooye@gmail.com";

  useEffect(() => {
    (async () => {
      try {
        const data = await getOrders(email);
        setOrders(data);
        console.log(data);
      } catch (e) {
        console.error("Error fetching orders:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, [email]);

  if (loading) return <ItemSkeleton />;
  if(orders.length < 0 ) return <div className="text-[10rem]">Nothing Here Yet</div>;
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {orders.map(({ _id, createdAt, orderItems, status }) => (
        <AccordionItem value={`item-${_id}`} key={_id}>
          <div className="mx-auto max-w-2xl sm:py-12 lg:max-w-7xl lg:px-8">
            <AccordionTrigger className="space-y-2 px-4 sm:flex sm:items-center sm:justify-between sm:space-y-0 sm:px-0">
              <div className="mt-2 border-b border-gray-200 pb-5 text-sm sm:flex sm:justify-between">
                <dl className="flex">
                  <dt className="text-gray-500">Order #{_id}</dt>
                  <dt>
                    <span className="sr-only">Date</span>
                    <span aria-hidden="true" className="mx-2 text-gray-400">
                      &middot;
                    </span>
                  </dt>
                  <dd className="font-medium text-gray-900">
                    <time dateTime={createdAt}>{formatDate(createdAt)}</time>
                  </dd>
                </dl>
              </div>
              <div className="overflow-hidden rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-black" />
              </div>
              {`${status.charAt(0).toUpperCase()}${status.slice(1)}`}
            </AccordionTrigger>

            {/* Products */}
            <AccordionContent className="mt-6 px-[1.5rem]">
              <h2 className="sr-only">Products purchased</h2>
              <div className="space-y-8">
                {orderItems.map(({ quantity, product, price }) => (
                  <div
                    key={product._id}
                    className="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
                  >
                    <div className="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
                      <Image
                        alt={product.name}
                        width={200}
                        height={200}
                        src={urlFor(product.images[0]).quality(100).url()}
                        className="aspect-square w-full rounded-lg bg-gray-50 object-cover"
                      />
                    </div>
                    <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                      <h3 className="text-lg font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 font-medium text-gray-900">₦{price}</p>
                      <p className="mt-3 text-gray-500">
                        {product.description}
                      </p>
                    </div>
                    <div className="sm:col-span-12 md:col-span-7">
                      <p className="mt-6 font-medium text-gray-900 md:mt-10">
                        {`${status.charAt(0).toUpperCase()}${status.slice(1)}`}{" "}
                        on
                        <time> {formatDate(createdAt)}</time>
                      </p>
                      <div className="mt-6">
                        <div className="overflow-hidden rounded-full bg-gray-200">
                          {status !== "completed" && <div
                            className={`h-2 rounded-full bg-black ${
                              status === "pending" ? "w-[250px]" : "w-[400px]"
                            } }`}
                          />}
                          {
                           status === "completed" && <div
                            className={`h-2 rounded-full bg-black w-full }`}
                          />
                          }

                        </div>
                        <div className="mt-6 hidden grid-cols-4 font-medium text-gray-600 sm:grid">
                          <div className="">Order placed</div>
                          <div
                            className={`text-center ${
                              status === "pending" ? "text-black" : ""
                            }`}
                          >
                            Pending
                          </div>
                          <div
                            className={`text-center ${
                              status === "processing" ? "text-black" : ""
                            }`}
                          >
                            Processing
                          </div>
                          <div
                            className={`text-right ${
                              status === "completed" ? "text-black" : ""
                            }`}
                          >
                            Delivered
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
