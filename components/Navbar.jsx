"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Auth from "./auth";
import { motion } from "framer-motion";
// Steps to create a responsive NavBar.

// Create two NavBars for when the site is running on mobile or desktop.
// Get the width of the page.

const Navbar = () => {
  // Create a state to monitor the width of the page and ensure that it does not re-render multiple times.
  const [isMobile, setIsMobile] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger state
  const toggleMenu = () => setIsOpen(!isOpen);

  // close menu when any navbar is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };
  // Helper function to check if a link is active
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  // Check screen size and do the needed stuff
  useEffect(() => {
    const checkScreenSize = () => {
      // When  the page width is more than 960 pixels, the desktop navBar should work. Otherwise, mobile navBar should show up.
      const shouldBeMobile = window.innerWidth <= 960;
      if (shouldBeMobile !== isMobile) {
        setIsMobile(shouldBeMobile);
      }
    };

    // Debounce resize handling for better performance
    const handleResize = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(checkScreenSize, 100);
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Initial check to set the state correctly
    checkScreenSize();

    // Cleanup event listener and timeout on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(window.resizeTimeout);
    };
  }, [isMobile]); // Dependency on `isMobile` to track threshold crossing

  return (
    <div>
      <nav>
        {!isMobile ? (
          // for the desktop navBars, create a flex box of three items: one for the logo, two for the nav-links, third for the authentication bar
          // For the navbar bar should be a row
          <ul className="desktop-nav ">
            <div className="logo-box">
              {/* Import the logo normally */}
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={200}
                height={20}
              />
            </div>
            {/* the nav-links should also be a row. */}
            <ul className="nav-links">
              <li onClick={closeMenu} className="nav-list">
                <Link
                  href="/"
                  // monitor the active link and change the color when the link is active
                  className={isActive("/") ? "activeNav nav-link" : ""}
                >
                  Home
                </Link>
              </li>
              <li onClick={closeMenu} className="nav-list">
                <Link
                  href="/about"
                  className={isActive("/about") ? "activeNav nav-link" : ""}
                >
                  About
                </Link>
              </li>
              <li onClick={closeMenu} className="nav-list">
                <Link
                  href="/products"
                  className={isActive("/products") ? "activeNav nav-link" : ""}
                >
                  Products
                </Link>
              </li>
              <li onClick={closeMenu} className="nav-list">
                <Link
                  href="/blog"
                  className={isActive("/blog") ? "activeNav nav-link" : ""}
                >
                  Blog
                </Link>
              </li>
            </ul>
            {/* Zubayr should create a component to take care of the authentication buttons */}
            <Auth />
          </ul>
        ) : (
          <ul className="mobile-nav">
            {/* For the mobile navBars, create a flex box of two items: The logo and an hamburger icon */}
            <div className="logo-box">
              {/* Import the logo normally */}
              <Image
                className="log"
                src="/assets/logo.png"
                alt="logo"
                width={200}
                height={20}
              />
            </div>
            {/* Zubayr should edit the addToCart page and put it here */}
            <div className="ham-cart">
              <p>Cart</p>
              <div
                className="hamburger"
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              >
                <motion.div
                  className="bar"
                  animate={{
                    rotate: isOpen ? 45 : 0, // Rotate top line to 45 degrees when open
                    y: isOpen ? 10 : 0, // Move the top line down
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />

                <motion.div
                  className="bar"
                  animate={{
                    rotate: isOpen ? -45 : 0, // Rotate bottom line to -45 degrees when open
                    y: isOpen ? -10 : 0, // Move bottom line up
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
          </ul>
        )}
      </nav>
      {isOpen ? (
        <ul className={`mob-nav-links ${isOpen ? "isOpen" : ""}`}>
          <li className="mob-nav-list">
            <Link
              href="/"
              className={
                isActive("/") ? "activeMobNav mob-nav-link" : "mob-nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="mob-nav-list">
            <Link
              href="/about"
              className={
                isActive("/about")
                  ? "activeMobNav mob-nav-link"
                  : "mob-nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="mob-nav-list">
            <Link
              href="/products"
              className={
                isActive("/products")
                  ? "activeMobNav mob-nav-link"
                  : "mob-nav-link"
              }
            >
              Products
            </Link>
          </li>
          <li className="mob-nav-list">
            <Link
              href="/blog"
              className={
                isActive("/blog") ? "activeMobNav mob-nav-link" : "mob-nav-link"
              }
            >
              Blog
            </Link>
          </li>
          <li className="mob-nav-list">
            <Link
              href="/blog"
              className={
                isActive("/blog") ? "activeMobNav mob-nav-link" : "mob-nav-link"
              }
            >
              {/* Zubayr fucntionalizes this part */}
              Sign up
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;

// Create a mobile navBar with five nav links (the three original nav links and the auth links zubayr will work on) and set it to hide initially. Keep in mind that the add to cart logo has to be there too
// Set the hamburger icon such that when the icon is clicked, it switched to a close icon(animations) and the nav-links which contain the login / add to cart shows up
// When the icon switches to close, the nav-links should appear from beside and put a z-index so that the navBar can show over the nav-links. That way, we will need to add a padding to the nav-links
// Style the nav-links for when one of them is active except the authentication buttons
// When each of the link,  the navBar should disappear again.
// Have fun, bro

// I stopped at linking and creating the pages to one another, then the mobile nav
