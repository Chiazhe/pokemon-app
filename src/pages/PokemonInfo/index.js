import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchData } from "../../fetchers";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { useFetchPokemonDetail } from "../../hooks/useFetchPokemonDetail";

function PokemonInfo() {
  const { name: pokemonName } = useParams();

  const onSuccess = (data) => {
    console.log("side effect after success fetching", data);
  };
  const onError = (data) => {
    console.log("side effect after failed fetching", data);
  };

  const {
    isLoading,
    isError,
    typesData,
    data: pokemonData,
  } = useFetchPokemonDetail(pokemonName, onSuccess, onError);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <>
      <h1>{pokemonData.name}</h1>
      <button
        onClick={() => {
          console.log(pokemonData);
        }}
      >
        Check Pokemon Data
      </button>
      <button
        onClick={() => {
          console.log(typesData);
        }}
      >
        Check Pokemon Type
      </button>
    </>
  );
}

export default PokemonInfo;
