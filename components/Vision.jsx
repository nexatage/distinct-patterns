// "use client";
import React from "react";

const Vision = (props) => {
  return (
    <div className="flex flex-col items-center px-4 lg:px-12">
      <h1 className="my-8 text-4xl font-bold text-center text-gray-600 md:text-6xl lg:text-6xl">
        <span className="text-black">OUR</span> {props.head}
      </h1>
      <p className="mb-6 text-lg text-left text-gray-800 md:text-2xl lg:text-5xl">
        {props.text}
        <span className="text-black">{props.text2}</span>
      </p>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <img
          src={`/assets/${props.img1}`}
          className="object-contain w-full h-auto"
          alt="vision-1"
        />
        <img
          src={`/assets/${props.img2}`}
          className="object-contain w-full h-auto"
          alt="vision-2"
        />
      </div>
    </div>
  );
};

export default Vision;
