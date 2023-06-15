import { useInfiniteQuery } from "react-query";
import { fetchAllPokemon } from "../fetchers";

export const useAllPokemonData = (onSuccess, onError) => {
  return useInfiniteQuery(["pokemon"], fetchAllPokemon, {
    onError,
    onSuccess,
    getNextPageParam: (lastPage, _allPages) => {
      return lastPage.next;
    },
    staleTime: Infinity,
  });
};
