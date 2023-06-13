import { useInfiniteQuery, useQueries } from "react-query";
import { fetchAllPokemon, fetchData } from "../fetchers";

export const useAllPokemonData = (onSuccess, onError) => {
  const {
    isLoading,
    isError,
    data: pokemonData,
    hasNextPage,
    fetchNextPage,
    isFetching,
    // isFetchingNextPage,
  } = useInfiniteQuery(["pokemon"], fetchAllPokemon, {
    onError,
    onSuccess,
    getNextPageParam: (lastPage, _allPages) => {
      return lastPage.next;
    },
    staleTime: Infinity,
    select: (data) => {
      const res = data?.pages.map((page) =>
        page.results.map((d) => {
          return d;
        })
      );
      console.log(res);
      return data;
    },
  });

  return {
    isLoading,
    isError,
    data: pokemonData,
    hasNextPage,
    fetchNextPage,
    isFetching,
    // isFetchingNextPage,
  };
};
