"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCart } from "../context/StateContext.js";

import { motion } from "framer-motion";
import Auth from "./auth.js";
const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
  },

  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Signup",
    href: "/signup",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => pathname === path;
  const { totalcartQuantity } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white p-[1rem]">
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto md:px-8">
        {/* Logo */}
        <div className="logo-box">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={130}
            height={30}
            className="w-auto h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="items-center hidden space-x-8 md:flex">
          {navigation.map(({ name, href }, index) => (
            <li key={`${index}-${name}`}>
              <Link
                href={href}
                className={`${
                  isActive(href)
                    ? "text[#0000] bg-[#eaeaea] p-[0.5rem_1rem] rounded-lg"
                    : "text-[#97919a]"
                } hover:text-[#000] transition`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Authentication Component */}
        <div className="hidden md:block">
          <Auth />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 ">
          <a href="/cart" className="relative">
            {" "}
            <Image
              src="/assets/shopping-cart.png"
              alt="logo"
              width={18}
              height={18}
              className="w-auto h-auto"
            />
            {
              <span className="absolute -top-2 -right-2 bg-[#eaeaea] text-[#000] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalcartQuantity}
              </span>
            }
          </a>
          <div
            className="cursor-pointer hamburger md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <motion.div
              className="w-6 h-0.5 bg-gray-800"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-gray-800"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full space-y-8 text-xl text-white bg-white md:hidden">
          {navigation.map(({ name, href }, index) => (
            <li key={`${index}-${name}`} onClick={closeMenu}>
              <Link
                href={href}
                className={`${
                  isActive(href)
                    ? "text-[#000] bg-[#eaeaea] p-[0.5rem_1rem] rounded-lg"
                    : "text-[#97919a]"
                } hover:text-[#000] text-[#000] transition`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
