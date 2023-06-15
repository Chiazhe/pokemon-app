import { useQuery, useQueries } from "react-query";
import { fetchData, fetchIndividualPokemon } from "../fetchers";

export const usePokemon = (pokemonName) => {
  // First API call to get the pokemon information
  const {
    isLoading: informationDataIsLoading,
    isError: informationDataIsError,
    data: informationData,
  } = useQuery(
    ["pokemon-info", pokemonName],
    () => fetchIndividualPokemon(pokemonName),
    {
      staleTime: Infinity,
      select: (data) => {
        // const img = data.sprites.other.official - artwork.front_default;
        delete data.forms;
        delete data.game_indices;
        // delete data.held_items;
        delete data.past_types;
        delete data.species;
        // delete data.sprites;
        delete data.location_area_encounters;
        return data;
      },
    }
  );

  // Dependent queries after the first fetch is completed
  // 1. Fetch the type data after getting the url for type in the first API call
  const typeQueries =
    informationData?.types.map((type) => ({
      queryKey: ["type", type.type.name],
      queryFn: () => fetchData(type.type.url),
      staleTime: Infinity,
    })) || [];
  const fetchedTypeData = useQueries(typeQueries);
  const typeDataisLoading = fetchedTypeData.some((query) => query.isLoading);
  const typeDataisError = fetchedTypeData.some((query) => query.isError);
  const typeData = fetchedTypeData.map((data) => data.data);

  // 1a. Process damage relation data
  const damageRelations =
    typeData?.map((data) => {
      return data?.damage_relations;
    }) || [];
  const damageRelationsData = damageRelations?.reduce((acc, obj) => {
    if (!obj || !acc) return null;
    Object.entries(obj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (!acc[key]) {
          acc[key] = [];
        }
        value.forEach((item) => {
          const name = item.name;
          const unique = !acc[key].includes(name);
          if (unique) {
            acc[key].push(name);
          }
        });
      }
    });
    return acc;
  }, {});

  // 2. Fetch the abilities data
  const abilityQueries =
    informationData?.abilities.map((ability) => ({
      queryKey: ["ability", ability.ability.name],
      queryFn: () => fetchData(ability.ability.url),
      staleTime: Infinity,
    })) || [];
  const fetchedAbilityData = useQueries(abilityQueries);
  const abilityDataisLoading = fetchedAbilityData.some(
    (query) => query.isLoading
  );
  const abilityDataisError = fetchedAbilityData.some((query) => query.isError);
  const abilityData = fetchedAbilityData?.map((data) => {
    if (!data.data) return null;
    const desc =
      data.data.effect_entries.filter(function (el) {
        return el.language.name === "en";
      })[0]?.effect || "No Description Found ...";
    return { name: data.data.name, description: desc };
  });

  // 3. Fetch the previous and next pokemon (can use useQueries as well)
  const id = informationData?.id;
  const TOTAL_POKEMON_COUNT = 1008;
  let prevId = id - 1,
    nextId = (id % TOTAL_POKEMON_COUNT) + 1;
  if (prevId <= 0) prevId += TOTAL_POKEMON_COUNT;
  const prevNextArray = [prevId, nextId];
  const prevNextQueries = prevNextArray?.map((id) => ({
    queryKey: ["pokemon-info", id],
    queryFn: () => fetchIndividualPokemon(id),
    staleTime: Infinity,
  }));
  const fetchedPrevNextData = useQueries(prevNextQueries);
  const prevNextDataisLoading = fetchedPrevNextData.some(
    (query) => query.isLoading
  );
  const prevNextDataisError = fetchedPrevNextData.some(
    (query) => query.isError
  );
  const prevNextData = fetchedPrevNextData?.map((data) => data.data);
  const cleanedPrevNextData = prevNextData?.map((poke) => {
    return { name: poke?.name, id: poke?.id };
  });

  // 4. Fetch Held Item
  const heldItemsQueries =
    informationData?.held_items.map((item) => ({
      queryKey: ["item", item.item.name],
      queryFn: () => fetchData(item.item.url),
      staleTime: Infinity,
    })) || [];
  const fetchedItemData = useQueries(heldItemsQueries);
  const itemDataisLoading = fetchedItemData.some((query) => query.isLoading);
  const itemDataisError = fetchedItemData.some((query) => query.isError);
  const itemData = fetchedItemData?.map((data) => {
    if (!data.data) return null;
    const desc = data.data.effect_entries.filter(function (el) {
      return el.language.name === "en";
    })[0].effect;
    const probability = informationData.held_items.filter(function (el) {
      return el.item.name === data.data.name;
    })[0].version_details[0].rarity;
    return {
      name: data.data.name,
      description: desc,
      probability,
      image: data.data.sprites.default,
    };
  });

  return {
    isLoading:
      informationDataIsLoading ||
      typeDataisLoading ||
      abilityDataisLoading ||
      prevNextDataisLoading ||
      itemDataisLoading,
    isError:
      informationDataIsError ||
      typeDataisError ||
      abilityDataisError ||
      prevNextDataisError ||
      itemDataisError,
    informationData,
    typeData,
    abilityData,
    prevPokemon: cleanedPrevNextData[0],
    nextPokemon: cleanedPrevNextData[1],
    itemData,
    damageRelationsData,
  };
};
