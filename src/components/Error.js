import React from "react";
import { uppercase_first_letter } from "../helpers";

function Error({ pokemonName }) {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-screen fixed top-0">
      <h1 className="text-4xl">
        We have encountered error finding {uppercase_first_letter(pokemonName)}
        ...
      </h1>
    </div>
  );
}

export default Error;
