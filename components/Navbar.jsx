"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Auth from "@/components/Auth";
import { useCart } from "../context/StateContext.js";
import shoppingcart from "@/public/shopping-cart-01.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { totalcartQuantity } = useCart();

  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white ">
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto md:px-8">
        {/* Logo */}
        <Link href="/" className="font-[Gwendolyn] font-bold text-[30px]">
          Distinct Patterns
        </Link>

        {/* Desktop Navigation */}
        <ul className="items-center hidden space-x-8 md:flex">
          {navigation.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className={`${
                  isActive(href)
                    ? "text-black bg-gray-200 p-2 rounded-lg"
                    : "text-gray-600"
                } hover:text-black transition`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart and Authentication */}
        <div className="hidden md:flex items-center w-[20%]  gap-[1rem]">
          <a href="/cart" className="relative">
            <Image
              src={shoppingcart}
              alt="Shopping Cart"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
            {totalcartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-gray-200 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalcartQuantity}
              </span>
            )}
          </a>
          {/* Authentication Component */}
          <div className="">
            <Auth />
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <UserButton afterSignOutUrl="/" />
          <div className="sm:hidden">
            <a href="/cart" className="relative">
              <Image
                src={shoppingcart}
                alt="Shopping Cart"
                width={22}
                height={22}
                className="w-[24px] h-[24px]"
              />
              {totalcartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-200 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalcartQuantity}
                </span>
              )}
            </a>
          </div>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 text-black">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[70%]">
            <SheetHeader>
              <SheetTitle className="font-[Gwendolyn] text-xl">
                Distinct Patterns
              </SheetTitle>
            </SheetHeader>
            <ul className="flex  flex-col mt-12  space-y-12  h-full">
              {navigation.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className={`${
                      isActive(href)
                        ? "text-black  bg-gray-200 p-2 rounded-lg"
                        : "text-gray-500"
                    } hover:text-black transition`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <div className="">
                <Auth />
              </div>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
