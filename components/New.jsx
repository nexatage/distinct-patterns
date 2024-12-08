import React from "react";

const New = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[5%] items-start">

        <h1 className="section-head self-center lg:self-end leading-tight text-4xl lg:text-[95px] font-semibold text-left text-black flex-none lg:flex-[60%]">

          NEW ARRIVAL
        </h1>
        <p className="section-paragraph self-start lg:self-end flex-none lg:flex-[35%] text-sm lg:text-[18px] font-medium leading-5 lg:leading-[25px] text-center lg:text-left text-black pb-3">
          A SIMPLE CLEAN, SUPER FAST HIGHLY FLEXIBLE, LIGHT MODERN THEME THAT
          CAN ENHANCE THE LOOK AND FUNCTIONALITY. PERFECT BLEND OF FASHION AND
          COMFORTABLE CLOTHS.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 arrival sm:grid-cols-2 lg:gap-6">
        <img
          src="/assets/arrival-1.jpg"
          alt="arrival_1"
          className="object-cover w-full"
        />
        <img
          src="/assets/arrival-2.jpg"
          alt="arrival_2"
          className="object-cover w-full"
        />
        <img
          src="/assets/arrival-3.jpg"
          alt="arrival_3"
          className="object-cover w-full"
        />
        <img
          src="/assets/arrival-4.jpg"
          alt="arrival_4"
          className="object-cover w-full"
        />
      </div>
      <h1 className="mt-6 text-center">Button</h1>
    </div>
  );
};

export default New;
