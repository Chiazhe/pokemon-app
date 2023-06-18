import { useInfiniteQuery } from "react-query";
import { fetchAllPokemon } from "../fetchers";

export const useAllPokemonData = () => {
  return useInfiniteQuery(["pokemon"], fetchAllPokemon, {
    getNextPageParam: (lastPage, _allPages) => {
      const lastPokemon = lastPage.results[lastPage.results.length - 1];
      const lastPokemonId =
        lastPokemon.url.split("/")[lastPokemon.url.split("/").length - 2];
      if (lastPokemonId > 1010) return null;
      return lastPage.next;
    },
    staleTime: Infinity,
  });
};
