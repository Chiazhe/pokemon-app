import React from "react";
import { ImSpinner2 } from "react-icons/im";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-screen fixed top-0">
      <ImSpinner2 className="text-green-600 text-[5rem] animate-spin my-8" />
      <h1 className="text-2xl animate-pulse">Loading ...</h1>
    </div>
  );
}

export default Loader;
