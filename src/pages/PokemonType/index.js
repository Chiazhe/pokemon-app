import React, { useEffect, Fragment } from "react";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { useParams, useLocation } from "react-router-dom";
import { useFetchPokemonType } from "../../hooks/useFetchPokemonType";
import PokemonCard from "../../components/PokemonCard";
import {
  pad_zero_in_front_id,
  typeImage,
  uppercase_first_letter,
} from "../../helpers";
import DamageRelation from "../PokemonInfo/DamageRelation";

function PokemonType() {
  const location = useLocation();
  const { type } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { typeInformationData, damageRelationsData, isLoading, isError } =
    useFetchPokemonType(type);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className="w-[80vw] md:w-[90vw] mx-auto">
      <div className="flex my-10 flex-col gap-[30px] md:flex-row">
        <div
          className="text-center flex flex-row md:flex-col-reverse justify-center items-center gap-0 w-full rounded p-2
            md:w-[40%] bg-zinc-400 text-zinc-100 dark:bg-slate-400 dark:text-slate-900"
        >
          <div>
            <h1 className={`text-5xl md:text-7xl font-bold flex items-center`}>
              {uppercase_first_letter(typeInformationData.name)}{" "}
            </h1>
            <p className="text-center text-lg md:text-2xl ml-2">
              (#{pad_zero_in_front_id(typeInformationData.id)})
            </p>
          </div>
          <div
            className={`text-${typeInformationData.name} text-5xl bg-black rounded-full p-3 md:p-4 mx-2`}
          >
            {typeImage(typeInformationData.name)}
          </div>
        </div>
        <div className="w-full">
          {/* <p className="text-2xl">Damage Relations</p> */}
          <div className="w-full">
            <DamageRelation damageRelationsData={damageRelationsData} />
          </div>
        </div>
      </div>
      <p className="text-2xl mb-2">Pokémon with this type</p>
      <div className="grid gap-[4rem] pb-16 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {typeInformationData?.pokemon
          .filter(
            (pokemon) =>
              pokemon.pokemon.url.split("/")[
                pokemon.pokemon.url.split("/").length - 2
              ] <= 1010
          )
          .map((pokemon) => (
            <Fragment key={pokemon.pokemon.name}>
              <PokemonCard
                key={pokemon.pokemon.name}
                id={pokemon.pokemon.url.split("/").slice(-2, -1)[0]}
                name={pokemon.pokemon.name}
              />
            </Fragment>
          ))}
      </div>
    </div>
  );
}

export default PokemonType;
