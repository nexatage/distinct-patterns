import React from "react";
import "/styles/globals.css";

import StoreCollection from "../components/StoreCollection";
import ImageCarousel from "../components/ImageCarousel";
import New from "../components/New";
import Style from "../components/Style";
import Footer from "../components/Footer";
import Meet from "../components/Meet";

export default function Page() {
  return (
    <section className="px-6 home-hero sm:px-3 md:px-12 lg:px-14">
      <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12">
        <h2 className="text-4xl font-semibold leading-tight text-left text-black underline sm:text-5xl md:text-7xl lg:text-6xl decoration-transparent decoration-4">
          EMBRACE TRADITION WITH
        </h2>
        <div className="flex flex-col gap-0 mb-5 sm:flex-row sm:gap-5 sm:space-x-5 sm:mb-0">
          <h1 className="text-5xl font-bold leading-tight text-left underline sm:text-5xl md:text-7xl lg:text-6xl decoration-transparent decoration-4 text-custom-gray">
            CONFIDENCE
          </h1>
          <p className="self-center text-base text-lg font-medium leading-6 text-left uppercase decoration-transparent underline-none">

            Discover pieces that blend tradition and trend, crafted to elevate
            every moment. Experience fashion that speaks to you.
          </p>
        </div>
      </div>
      <div className="mb-12">
        <div className="relative w-full lg:h-[800px] lg:bg-[url('/assets/homepage-hero-background.png')] lg:bg-no-repeat lg:bg-cover lg:bg-center flex flex-col lg:flex-row gap-12 px-4 lg:px-10 pb-10">
          {/* Image Section */}
          <div className="relative lg:absolute lg:bottom-2 lg:left-[40%] lg:translate-x-0">
            <img
              className="w-auto h-auto max-w-full"
              src="/assets/hero-home.png"
              alt="hero-image"
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:self-end lg:pb-14 lg:max-w-[500px]">
            <p className="text-sm font-medium leading-6 text-black uppercase">
              Distinct Pattern isn’t just a brand; it’s a journey. We embrace
              the rich heritage of African fabrics while blending them with
              modern style. Our collections are crafted with precision and
              passion, each piece designed to make a statement.
            </p>
            <button className="px-4 py-2 mt-4 text-black border border-black">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <ImageCarousel />


      <New />
      <StoreCollection />
      <Style />
      <Meet />
      <Footer />

    </section>
  );
}
