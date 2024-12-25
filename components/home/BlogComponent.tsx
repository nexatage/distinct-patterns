import React from "react";
import Image from "next/image";
import brand from "@/public/assets/brand.jpg";
import { ArrowUpRight } from "lucide-react";

const BlogComponent = () => {
  return (
    <div className="flex max-md:flex-col lg:h-[700px] mt-8 mb-8 gap-[2rem] p-2 w-full">
      <div className="w-[50%] max-md:w-full  h-full relative cursor-pointer ">
        <Image
          width={100}
          height={100}
          src={brand}
          alt={"blog image"}
          className="max-md:h-[50%] relative w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-4 left-4 flex gap-2 bg-white p-3  rounded-full">
          <p className="font-semibold text-sm">
            Good Outfit Boost Your Confidence
          </p>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2 text-white bg-black p-3  rounded-full">
          <p className="font-semibold text-sm">Read More</p>
          <ArrowUpRight />
        </div>
        <div className="absolute top-4 right-4 flex gap-2 text-white bg-black p-3  rounded-full">
          <p className="font-semibold text-sm">Read Time: 4 min Read</p>
          <ArrowUpRight />
        </div>
      </div>
      <div className="w-[50%] max-md:w-full flex flex-col justify-between gap-[1rem] p-[]">
        <div className="bg-gray-100  h-[50%] rounded-2xl border-2 border-slate-200 p-[1.5rem]">
          <div className=" bg-white p-3  mb-5 rounded-2xl font-semibold inline-block">OUR BLOG</div>
          <div className="flex flex-col gap-[1rem]">
            <div>
              <p className="font-bold text-[2rem] md:text-[2.5rem]">
                DIVE INTO A WORLD OF ENDLESS FASHION POSSIBILITIES
              </p>
            </div>
            <div>
              <p className="font-semibold text-sm">
                A SIMPLE CLEAN, SUPER FAST, HIGHLY FLEXIBLE, LIGHT MODERN OUTFIT
                THAT CAN ENCHANCE YOUR LOOK {" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[1rem] h-[50%] max-md:flex-col justify-between">
          <div className=" cursor-pointer relative w-[50%] max-md:w-full ">
            <Image
              width={100}
              height={100}
              src={brand}
              alt={"blog image"}
              className=" relative w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 p-1 flex gap-2 w-full justify-between">
              <p className="font-semibold text-[0.6rem] bg-white p-3  rounded-2xl">
                Good Outfit Boost Your Confidence
              </p>

              <div className="flex gap-2 text-white bg-black p-1  rounded-full">
                <ArrowUpRight />
              </div>
            </div>

            <div className="absolute top-4 right-4 flex gap-2 bg-white  p-3  rounded-full">
              <p className="font-semibold text-[0.6rem]">4 min</p>
            </div>
          </div>
          <div className="cursor-pointer relative w-[50%] max-md:w-full">
            <Image
              width={100}
              height={100}
              src={brand}
              alt={"blog image"}
              className=" relative w-full h-full object-cover rounded-2xl"
            />
            {/*  */}
            <div className="absolute bottom-4 p-1 flex gap-2 w-full justify-between">
              <p className="font-semibold text-[0.6rem] bg-white p-3  rounded-2xl">
                Good Outfit Boost Your Confidence
              </p>

              <div className="flex gap-2 text-white bg-black p-1  rounded-full">
                <ArrowUpRight />
              </div>
            </div>

            <div className="absolute top-4 right-4 flex gap-2 bg-white  p-3  rounded-full">
              <p className="font-semibold text-[0.6rem]">4 min</p>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
