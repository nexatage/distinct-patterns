import Link from "next/link";
import React from "react";
import  Image  from "next/image";

const Style = () => {
  return (
    <section className="bg-gray-100 section-style mt-10 p-28 px-16 rounded-xl justify-items-center">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-3">
        <h1 className="justify-center text-4xl font-semibold text-center text-black lg:text-left lg:text-6xl">
          YOUR STYLE
        </h1>
        <div className="style-1">
          <Image width={200} height={200} alt="style" src="/assets/style-1.png" className="w-full lg:w-auto" />
        </div>
        <div className="style-2 justify-self-end">
          <Image width={200} height={200} alt="style" src="/assets/style-2.png" className="w-full lg:w-auto" />
        </div>
        <h1 className="self-end text-4xl font-semibold text-center text-gray-500 lg:text-right justify lg:text-6xl">
          YOUR RULES
        </h1>
      </div>
      <h1 className="block mt-6 text-2xl font-semibold text-center text-3 lg:text-6xl">
        EMPOWER YOUR FASHION
      </h1>
      <div>
        <p className="block px-6 py-3 text-lg text-center text-white bg-black rounded-full cursor-pointer button mt-7 lg:text-xl hover:bg-gray-800">
            <Link href="/products">
              Shop Now
              <span className="ml-2">→</span>
            </Link>
        </p>
      </div>
    </section>
  );
};

export default Style;
