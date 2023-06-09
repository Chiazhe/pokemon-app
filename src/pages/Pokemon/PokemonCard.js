import React from "react";
import { useNavigate } from "react-router-dom";
import {
  image_url_helper,
  pad_zero_in_front_id,
  uppercase_first_letter,
} from "../../helpers";

function PokemonCard({ id, name }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center justify-center flex-col text-center p-[10px] md:p-[20px] border-solid rounded bg-zinc-200
      dark:bg-slate-600 hover:scale-110 hover:cursor-pointer duration-500"
    >
      <div
        onClick={() => navigate(`/pokemon/${name}`)}
        className="flex items-center justify-between flex-col h-full"
      >
        <div className="w-full flex items-center justify-center h-full drop-shadow-dark-img-shadow">
          <img
            className="w-[80%]"
            src={image_url_helper(id)}
            alt={name}
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-lg dark:text-gray-400">
            #{pad_zero_in_front_id(id)}
          </h2>
          <h1 className="text-2xl font-bold">{uppercase_first_letter(name)}</h1>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
