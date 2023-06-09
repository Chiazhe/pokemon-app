export const image_url_helper = (id) => {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.padStart(
    3,
    "0"
  )}.png`;
};
