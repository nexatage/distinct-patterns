import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="pl-8 md:pl-0">
      <hr />
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="flex flex-col flex-1 p-8">
          <div className="self-center">
            <Image width={200} height={20} src="/assets/logo.png" alt="logo" />
          </div>
          <p className="mt-8 mb-9 text-black text-[15px] font-semibold leading-[1.3] uppercase footer-text-1">
            Explore our collection, where style meets comfort in trendy quality
            fabrics.
          </p>
          <div className="inline-block p-2 mb-7 rounded-full bg-[#d9d9d9] venue-icon">
            <Image
              width={30}
              height={30}
              src="/assets/location.png"
              alt="venue"
            />
          </div>
          <p className="text-black text-[15px] font-bold leading-[1.2] address">
            5th Floor, Banana Island, Lagos, Nigeria.
          </p>
        </div>

        <div className="flex flex-col flex-1 p-8 text-center footer-2">
          <h3 className="text-[#777777] text-[16px] font-bold uppercase company">
            COMPANY
          </h3>
          <ul className="flex gap-2 mt-6 footer-links">
            <li>
              <Link
                className="text-[#9e9e9e] text-[18px] font-bold footer-link"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[#9e9e9e] text-[18px] font-bold footer-link"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[#9e9e9e] text-[18px] font-bold footer-link"
                href="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="text-[#9e9e9e] text-[18px] font-bold footer-link"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-[#9e9e9e] text-[18px] font-bold footer-link"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col flex-1 p-8 border-l-2 border-[#9e9e9e] footer-3">
          <h1 className="text-4xl font-semibold leading-[45px] subscribe">
            Subscribe To Our Newsletter
          </h1>
          <form className="flex items-center border-b border-gray-400 focus-within:border-black">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-2 text-base bg-transparent outline-none email"
              required
            />
            <button
              type="submit"
              className="p-2 text-lg text-black transition hover:text-gray-600"
            >
              ➤
            </button>
          </form>
        </div>
      </div>

      <hr />
      <div className="flex flex-col items-center justify-between mt-8 md:flex-row lg:flex-row copyright">
        <p className="mb-4">
          &copy; Copyright {date}
          <span>Distinct Patterns</span>
        </p>
        <p className="mb-4">
          Designed and developed by{" "}
          <strong>
            <a
              href="https://nexatage.framer.website"
              target="_blank"
              className="nexatage"
            >
              Nexatage
            </a>
          </strong>
        </p>
        <ul className="flex gap-2 social-links">
          <li>
            <a
              href="https://www.instagram.com/distinctpatterns?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <div className="inline-block p-2 rounded-full bg-[#d9d9d9] venue-icon">
                <Image
                  width={30}
                  height={30}
                  src="/assets/instagram.png"
                  alt="instagram_logo"
                />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@distinctpatterns?is_from_webapp=1&sender_device=pc"
              target="_blank"
            >
              <div className="inline-block p-2 rounded-full bg-[#d9d9d9] venue-icon">
                <Image
                  width={30}
                  height={30}
                  src="/assets/tiktok.png"
                  alt="tiktok_logo"
                />
              </div>
            </a>
          </li>
          <li>
            <a href="https://x.com/DistinctPattern" target="_blank">
              <div className="inline-block p-2 rounded-full bg-[#d9d9d9] venue-icon">
                <Image
                  width={30}
                  height={30}
                  src="/assets/x.png"
                  alt="x_logo"
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
