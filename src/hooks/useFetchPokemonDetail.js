import { useEffect } from "react";
import { useQueries } from "react-query";
import {
  fetchData,
  fetchIndividualPokemon,
  fetchPokemonSpecies,
} from "../fetchers";

export const useFetchPokemonDetail = (pokemonName, onSuccess, onError) => {
  const queries = useQueries([
    {
      queryKey: ["pokemon-data", pokemonName],
      queryFn: () => fetchIndividualPokemon(pokemonName),
    },
    {
      queryKey: ["pokemon-species", pokemonName],
      queryFn: () => fetchPokemonSpecies(pokemonName),
    },
  ]);

  const isLoading = queries.some((query) => query.isLoading);
  const isError = queries.some((query) => query.isError);
  const isFetched = queries.some((query) => query.isFetched);

  const data = queries.reduce((acc, query) => {
    if (query.data) {
      return { ...acc, ...query.data };
    }
    return acc;
  }, {});

  // const typesQueries = useQueries({
  //   queries: data?.types[0].map((type) => [
  //     {
  //       queryKey: ["type", type],
  //       queryFn: () => fetchData(type.type.url),
  //       staleTime: Infinity,
  //     },
  //   ]),
  //   enabled: !!isFetched,
  // });

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("Clean up");
      console.log(data);
      // Perform cleanup or any additional logic with mergedData
      // ...

      // Call the onSuccess callback with the merged data
      onSuccess(data);
    }
  }, [isLoading, isError, data, onSuccess]);

  return { data, isLoading, isError, isFetched };
};
