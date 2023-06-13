import axios from "axios";

export const fetchData = async (url) => {
  if (!url) return;
  // console.log("Calling fetchData. Fetching from: ", url);
  return await axios.get(url).then((res) => res.data);
};

export const fetchAllPokemon = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon/",
}) => {
  return await axios.get(pageParam).then((res) => res.data);
};

export const fetchIndividualPokemon = async (pokemonName) => {
  if (!pokemonName) return;
  // console.log(
  //   "Fetching individual pokemon... ",
  //   "https://pokeapi.co/api/v2/pokemon/" + pokemonName
  // );
  return await axios
    .get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
    .then((res) => res.data);
};

export const fetchPokemonSpecies = async (pokemonName) => {
  if (!pokemonName) return;
  // console.log(
  //   "Fetching pokemon species... ",
  //   "https://pokeapi.co/api/v2/pokemon-species/" + pokemonName
  // );
  return await axios
    .get("https://pokeapi.co/api/v2/pokemon-species/" + pokemonName)
    .then((res) => res.data);
};
