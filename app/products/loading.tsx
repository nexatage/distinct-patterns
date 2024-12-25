import React from "react";

const loading = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center m-auto">
      <div className="h-[100vh] w-full lds-hourglass"></div>
    </div>
  );
};

export default loading;
