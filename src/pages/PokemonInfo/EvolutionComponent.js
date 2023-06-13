import React from "react";
import {
  image_url_helper,
  pad_zero_in_front_id,
  uppercase_first_letter,
} from "../../helpers";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function EvolutionComponent({ evolution }) {
  const navigate = useNavigate();

  return (
    <div className="p-12">
      <div className="sm:w-[400px] p-4 sm:p-10 mx-auto border-double border-4 border-black dark:border-zinc-300">
        <h2 className="text-2xl sm:text-3xl text-center py-4">Evolutions</h2>
        <div className="flex flex-col justify-center items-center">
          {evolution?.map((pokemon, i) => (
            <React.Fragment key={i}>
              <div
                onClick={() => navigate(`/pokemon/${pokemon[1]}`)}
                className="w-[80%] max-w-[300px] border-double rounded-3xl border-2 p-4 my-4 bg-cyan-500 dark:bg-indigo-300 hover:cursor-pointer"
              >
                <div className="drop-shadow-4xl">
                  <img
                    className="animate-up-down"
                    src={image_url_helper(pokemon[0])}
                  />
                </div>
                <div className="text-center text-black">
                  <p className="text-sm italic">
                    #{pad_zero_in_front_id(pokemon[0])}
                  </p>
                  <p className="text-2xl">
                    {uppercase_first_letter(pokemon[1])}
                  </p>
                </div>
              </div>
              {i !== evolution.length - 1 && (
                <>
                  <AiOutlineArrowDown className="text-lg my-4" />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EvolutionComponent;
