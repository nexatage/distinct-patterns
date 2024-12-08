import React from "react";

const Meet = () => {
  return (
    <section className="my-12">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[5%] items-center lg:items-start">

        <h1 className="self-center lg:self-start leading-tight text-4xl lg:text-[95px] font-semibold text-center lg:text-left text-black flex-none lg:flex-[60%]">

          MEET US ON INSTAGRAM
        </h1>
        <p className="section-paragraph self-start lg:self-end flex-none lg:flex-[35%] text-sm lg:text-[18px] font-medium leading-5 lg:leading-[25px] text-center lg:text-left text-black pb-3">
          A SIMPLE CLEAN, SUPER FAST HIGHLY FLEXIBLE, LIGHT MODERN THEME THAT
          CAN ENHANCE THE LOOK AND FUNCTIONALITY. PERFECT BLEND OF FASHION AND
          COMFORTABLE CLOTHS.
        </p>
      </div>
      <div className="text-black">
        <button className="px-6 py-3 text-white transition bg-black rounded button hover:bg-gray-800">
          Follow us
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-12 photos lg:flex-row lg:gap-2">
        <div className="photo-box-1 basis-[49%]">
          <img
            src="/assets/meet-main.png"
            className="w-full photo-1"
            alt="Main photo"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 basis-[49%] photo-box-main">
          <div className="photo-box-2">
            <img
              src="/assets/meet-1.jpg"
              className="w-full photo-2"
              alt="Photo 1"
            />
          </div>
          <div className="photo-box-3">
            <img
              src="/assets/meet-2.jpg"
              className="w-full photo-3"
              alt="Photo 2"
            />
          </div>
          <div className="photo-box-4">
            <img
              src="/assets/meet-3.jpg"
              className="w-full photo-4"
              alt="Photo 3"
            />
          </div>
          <div className="photo-box-5">
            <img
              src="/assets/meet-4.jpg"
              className="w-full photo-5"
              alt="Photo 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;
