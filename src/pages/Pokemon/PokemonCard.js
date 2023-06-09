import React from "react";
import { Link } from "react-router-dom";
import { image_url_helper } from "../../helpers/image_url";

function PokemonCard({ id, name }) {
  return (
    <div
      className="text-center p-[20px] border-solid rounded bg-zinc-500
      dark:bg-slate-600 hover:scale-110 duration-500"
    >
      <Link to={`/pokemon/${name}`}>
        <div className="w-full flex items-center justify-center drop-shadow-dark-img-shadow">
          <img className="" src={image_url_helper(id)} alt={name} />
        </div>
        <div>
          <h2 className="text-lg dark:text-gray-400">#{id.padStart(4, "0")}</h2>
          <h1 className="text-2xl font-bold">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default PokemonCard;
