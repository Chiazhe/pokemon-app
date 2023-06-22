import { useQuery } from "react-query";
import { fetchData, fetchPokemonSpecies } from "../fetchers";

export const usePokemonSpecies = (pokemonName) => {
  const {
    isLoading: speciesDataIsLoading,
    isError: speciesDataIsError,
    data: speciesData,
  } = useQuery(
    ["pokemon-species", pokemonName],
    () => fetchPokemonSpecies(pokemonName),
    {
      staleTime: Infinity,
      select: (data) => {
        const description =
          data.flavor_text_entries.filter(function (el) {
            return el.language.name === "en";
          })[0]?.flavor_text || "No Description Found ...";
        data = { ...data, description };
        delete data.flavor_text_entries;
        delete data.egg_groups;
        delete data.evolves_from_species;
        delete data.form_descriptions;
        delete data.forms_switchable;
        delete data.genera;
        // delete data.habitat;
        delete data.is_baby;
        delete data.is_legendary;
        delete data.is_mythical;
        delete data.pal_park_encounters;
        delete data.pokedex_numbers;
        delete data.varieties;
        delete data.is_baby;
        return data;
      },
    }
  );

  const evolutionUrl = speciesData?.evolution_chain.url;

  const { data: evolutionData } = useQuery(
    ["evolution", evolutionUrl],
    () => fetchData(evolutionUrl),
    {
      enabled: !!evolutionUrl,
      staleTime: Infinity,
      select: (data) => {
        let evoData = data.chain;
        const evoChain = [];
        // let curr = null;
        while (evoData) {
          const name = evoData.species.name;
          const id = evoData.species.url.split("/").slice(-2)[0];
          // if (curr && parseInt(id) !== curr + 1) break;
          // curr = parseInt(id);
          evoChain.push([id, name]);
          evoData = evoData.evolves_to[0];
        }
        return evoChain;
      },
    }
  );

  return {
    isLoading: speciesDataIsLoading,
    isError: speciesDataIsError,
    speciesData,
    evolutionData,
  };
};
