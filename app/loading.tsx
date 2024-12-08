import React from "react";

const loading = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center m-auto">
      <div className="h-[100vh] w-[100vw] lds-hourglass"></div>
    </div>
  );
};

export default loading;
