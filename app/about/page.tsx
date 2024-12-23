import React from "react";
import Vision from "../../components/Vision";
import Brand from "../../components/Brand";
import Image from "next/image";
import maleek from "@/public/about/WhatsApp_Image_2024-10-22_at_20.54.47-removebg-preview 1.svg";
import { Button } from "@/components/ui/button";
import v1 from "@/public/missionandvision/v1.svg"
import v2 from "@/public/missionandvision/v2.svg"
import m1 from "@/public/missionandvision/c5.svg"
import m2 from "@/public/missionandvision/c6.svg"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const Page = () => {
  return (
      <div className="w-full bg-white py-4 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Background shape */}
          {/* <div className="absolute top-0 right-0 w-3/4 h-full rounded-l-3xl z-0"> </div> */}
          
          <div className="relative z-10 flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/2 pt-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                IN RELATION
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-8">
                TO US
              </h2>
              <div className="bg-[#F5F5F5] rounded-2xl p-6 md:p-7 [@media(min-width:1080px)]:p-12 mt-8">
                <h3 className="text-3xl font-semibold mb-4">Your First Love</h3>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <Button 
                  variant="default" 
                  className="bg-black text-white rounded-full px-6 py-2 text-sm hover:bg-gray-800 transition-colors"
                >
                  <a href="/products">SHOP NOW</a>
                  
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image
                  src={maleek}
                  alt="Man in black outfit"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Vision
        title="OUR VISION"
        leftImage={v1}
        rightImage={v2}
      />
      <Vision
        title="OUR MISSION"
        leftImage={m1}
        rightImage={m2}
        text1="Perfection Is Achieved, Not When There Is Nothing More To Add,"
        text2="But When There Is Nothing Left To Take Away."
      />
      <Brand />
      </div>
  );
};

export default Page;
