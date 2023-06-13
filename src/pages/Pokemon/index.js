import React, { Fragment } from "react";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import PokemonCard from "./PokemonCard";
import { useAllPokemonData } from "../../hooks/useFetchAllPokemonData";

function Pokemon() {
  const onSuccess = (pokemonData) => {
    console.log("side effect after success fetching", pokemonData);
  };
  const onError = (pokemonData) => {
    console.log("side effect after failed fetching", pokemonData);
  };

  const {
    isLoading,
    isError,
    data: pokemonData,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useAllPokemonData(onSuccess, onError);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="w-[90vw] mx-auto">
      <div className="flex flex-col items-center pt-16 pb-12 text-center">
        <h1 className="text-6xl font-bold">Master the Pokémon Universe</h1>
        <p>
          Choose Your Team, Train Your Pokémon, and Conquer the World of Pokémon
          Battles
        </p>
      </div>
      <div className="grid gap-[4rem] grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {pokemonData?.pages.map((page, i) => {
          return (
            <Fragment key={i}>
              {page.results.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  id={pokemon.url.split("/").slice(-2, -1)[0]}
                  name={pokemon.name}
                />
              ))}
            </Fragment>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <button
          disabled={!hasNextPage}
          onClick={fetchNextPage}
          className="m-[2rem] px-[1.5em] py-[0.5em] rounded-lg border-solid border-2 
            text-blue-950 bg-indigo-500 hover:bg-indigo-400 dark:hover:bg-indigo-600"
        >
          Load More Pokémon
        </button>
      </div>
      {isFetching && <Loader />}
    </div>
  );
}

export default Pokemon;
