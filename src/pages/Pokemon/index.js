import React, { Fragment, useState } from "react";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import PokemonCard from "./PokemonCard";
import { useAllPokemonData } from "../../hooks/useAllPokemonData";
import { AiOutlineSearch } from "react-icons/ai";

function Pokemon() {
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchedTerm(e.target.value);
  };

  const {
    isLoading,
    isError,
    data: pokemonData,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useAllPokemonData();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="w-[80vw] md:w-[90vw] mx-auto">
      <div className="flex flex-col items-center pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Master the Pokémon Universe
        </h1>
        <p className="text-sm md:text-base">
          <span className="md:text-xl text-red-600 italic">Choose </span>Your
          Team, <span className="md:text-xl text-red-600 italic">Train </span>
          Your Pokémon, and{" "}
          <span className="md:text-xl text-red-600 italic">Conquer </span>the
          World of Pokémon Battles
        </p>
        <div className="w-[50%] min-w-[300px] flex items-center justify-center text-sm mt-8 rounded-full overflow-hidden">
          <input
            type="text"
            value={searchedTerm}
            onChange={handleInputChange}
            placeholder="Search Pokémon..."
            className="text-black w-full px-4 py-2 m-0 tracking-wider border-none focus:outline-none"
          />
          <button className="py-2 px-6 h-full bg-white ">
            <AiOutlineSearch className="inline dark:text-black" />
          </button>
        </div>
      </div>
      <div className="grid gap-[4rem] pb-16 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {pokemonData?.pages.map((page, i) => {
          return (
            <Fragment key={i}>
              {page.results
                .filter(
                  (pokemon) =>
                    pokemon.name.includes(searchedTerm) &&
                    pokemon.url.split("/")[pokemon.url.split("/").length - 2] <=
                      1010
                )
                .map((pokemon) => (
                  <PokemonCard
                    key={pokemon.name}
                    id={pokemon.url.split("/").slice(-2, -1)[0]}
                    name={pokemon.name}
                  />
                ))}
              {/* {page.results.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  id={pokemon.url.split("/").slice(-2, -1)[0]}
                  name={pokemon.name}
                />
              ))} */}
            </Fragment>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        {hasNextPage && (
          <button
            disabled={!hasNextPage}
            onClick={fetchNextPage}
            className="m-12 px-[1.5em] py-[0.5em] rounded-lg border-solid border-2 
          border-zinc-900 bg-zinc-400 hover:bg-zinc-300 
          dark:border-slate-300 dark:bg-slate-900 hover:dark:bg-slate-800"
          >
            Load More Pokémon
          </button>
        )}
      </div>
      {isFetching && <Loader />}
    </div>
  );
}

export default Pokemon;
