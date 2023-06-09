import { useInfiniteQuery } from "react-query";
import { FETCH_ALL_POKEMON } from "../fetchers";

export const useAllPokemonData = (onSuccess, onError) => {
  return useInfiniteQuery(["all-pokemon"], FETCH_ALL_POKEMON, {
    onSuccess,
    onError,
    getNextPageParam: (_lastPage, page) => {
      return page + 20;
    },
    // getNextPageParam: (prevPage) => {
    //   console.log("prev page -> next", prevPage.data.next);
    //   return prevPage.data.next;
    // },
    select: (data) => {
      return data;
    },
  });
};
