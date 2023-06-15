import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { image_url_helper } from "../helpers";
import { pad_zero_in_front_id } from "../helpers";

function PrevNextComponent({ data: pokemon, isPrev }) {
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLink(`/pokemon/${pokemon.name}`);
  }, [pokemon]);

  return (
    <div
      onClick={() => navigate(link)}
      className="w-[50%] h-full relative px-[30px] flex justify-start items-center bg-cover
        bg-no-repeat transition-filter-transform ease-in-out duration-200 hover:cursor-pointer
        group is-published"
      style={
        isPrev
          ? { justifyContent: "flex-end" }
          : { justifyContent: "flex-start" }
      }
    >
      <img
        className="absolute bottom-0 sm:h-[120%] md:h-[140%] lg:h-[25vw] right-0 duration-300 
          drop-shadow-4xl dark:drop-shadow-4xl-dark 
          group-[.is-published]:hover:bottom-[15px] sm:group-[.is-published]:hover:bottom-[20px]
          md:group-[.is-published]:hover:bottom-[25px] lg:group-[.is-published]:hover:bottom-[40px]"
        src={image_url_helper(pokemon.id)}
        alt={`pokemon ${pokemon.name} img`}
        style={isPrev ? { left: "0" } : {}}
      />
      <div
        className="sm:w-[200px] md:w-[250px] lg:w-[400px] min-h-0 flex flex-col z-[6px]"
        style={isPrev ? { textAlign: "right" } : {}}
      >
        <h4 className="text-xs sm:text-sm uppercase tracking-[2px] mb-2">
          {isPrev ? "Previous Pokemon" : "Next Pokemon"}
        </h4>
        <h2 className="text-2xl sm:text-4xl uppercase tracking-[1px] font-prevNextName font-semibold leading-4 ">
          {pokemon.name}
        </h2>
        <h3 className="text-lg tracking-[2px] ">
          #{pad_zero_in_front_id(pokemon.id)}
        </h3>
      </div>
    </div>
  );
}

export default PrevNextComponent;