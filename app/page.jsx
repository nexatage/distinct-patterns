import React from "react";
import "/styles/globals.css";

import StoreCollection from "../components/StoreCollection";
import ImageCarousel from "@/components/ImageCarousel";
import New from "../components/New";
import Style from "../components/Style";
import Footer from "../components/Footer";
import Meet from "../components/Meet";
import sim from "@/public/Rectangle 1.svg"
import maleek from "@/public/maleek-home.svg"
import Image from "next/image";
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div>
    <div className="relative w-full min-h-screen  overflow-hidden">
    {/* Main Content Container */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="relative z-10 flex flex-col ">
          <h1 className="text-5xl md:text-[72px] [@media(min-width:1230px)]:text-[95px] font-bold tracking-tight">
            EMBRACE TRADITION WITH
            <br />
            <span className="text-gray-400 relative inline-flex items-center">
              CONFIDENCE
              <div className="hidden [@media(min-width:1230px)]:block ml-12 max-w-sm">
                <p className="text-sm tracking-tight text-gray-600">
                  Discover pieces that blend tradition and trend, crafted to elevate
                  every moment. Experience fashion that speaks to you.
                </p>
            </div>
            </span>
          </h1>
        </div>


      {/* Main Image Container */}
      <div className="relative mt-8 md:mt-0">
        {/* Sim-card shaped background image */}
        <div className="absolute inset-0 -bottom-12 z-0">
          {/* Replace the src with your actual sim-card shaped background image path */}
          <Image
            src={sim}
            alt="Sim-card shaped background"
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Add your sim-card shaped background image here */}
          {/* <img src="YOUR_SIM_CARD_BACKGROUND_IMAGE_URL" alt="Sim-card shaped background" className="w-full h-full object-cover rounded-3xl" /> */}
        </div>

        {/* Main Image */}
        <div className="relative z-10">
          {/* Replace the src with your actual image path */}
          <Image
            src={maleek}
            alt="Model wearing traditional fashion"
            className="mr-3 md:mr-7 rounded-3xl w-full max-w-3xl mx-auto"
          />
          {/* Add your hero image here */}
          {/* <img src="YOUR_HERO_IMAGE_URL" alt="Hero fashion" className="rounded-3xl w-full max-w-3xl mx-auto" /> */}
        </div>
        {/* Description Text */}
      <div className="hidden md:block absolute bottom-24 left-8 md:left-12 max-w-xs">
        <p className="text-sm text-gray-800">
          DISTINCT PATTERN ISN'T JUST A BRAND; IT'S A JOURNEY. WE EMBRACE THE RICH HERITAGE OF AFRICAN FABRICS WHILE BLENDING THEM WITH MODERN AESTHETICS. EACH PIECE IS CRAFTED WITH PRECISION AND PASSION, EACH PIECE DESIGNED TO MAKE A STATEMENT.
        </p>
      </div>
      {/* Shop Now Button */}
      <div className="absolute bottom-12 left-8 md:left-12">
        <Button 
          variant="outline" 
          className="group border-black hover:bg-black hover:text-white transition-colors"
        >
          SHOP NOW
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      {/* Distinct Patterns Text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2">
        <p className="font-[Gwendolyn] font-bold text-[35px] vertical-text transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Distinct Patterns
        </p>
      </div>
      </div>
      <ImageCarousel />
      <New />
      <StoreCollection />
      <Style />
      <Meet />
    </div>
    
  </div>

      

      </div>
  );
}
