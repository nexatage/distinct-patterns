import React from "react";
import "/styles/globals.css";
export default function Page() {
  return (
    <section className="px-6 home-hero sm:px-3 md:px-12 lg:px-14">
      <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12">
        <h2 className="text-4xl font-semibold leading-tight text-left text-black underline sm:text-5xl md:text-7xl lg:text-8xl decoration-transparent decoration-4">
          EMBRACE TRADITION WITH
        </h2>
        <div className="flex flex-col gap-0 mb-5 sm:flex-row sm:gap-5 sm:space-x-5 sm:mb-0">
          <h1 className="text-5xl font-bold leading-tight text-left underline sm:text-5xl md:text-7xl lg:text-9xl decoration-transparent decoration-4 text-custom-gray">
            CONFIDENCE
          </h1>
          <p className="self-center text-base text-lg font-medium leading-6 text-left decoration-transparent underline-none">
            Discover pieces that blend tradition and trend, crafted to elevate
            every moment. Experience fashion that speaks to you.
          </p>
        </div>
      </div>
      <div className="hero-2">
        <div className="hero-2-a">
          <p className="hero-text">
            Distinct Pattern isn’t just a brand; it’s a journey. We embrace the
            rich heritage of African fabrics while blending them with modern
            style. Our collections are crafted with precision and passion, each
            piece designed to make a statement.
          </p>
          <button className="hero-cta">SHOP NOW</button>
        </div>
        <img
          className="hero-img"
          src="/assets/hero_image.png"
          alt="distinct-pattern"
        />
      </div>
    </section>
  );
}
