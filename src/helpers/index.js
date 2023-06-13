export const image_url_helper = (id) => {
  if (typeof id !== "string") id = JSON.stringify(id);
  // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const pad_zero_in_front_id = (id) => {
  if (typeof id !== "string") id = JSON.stringify(id);
  return id.padStart(4, "0");
};

export const uppercase_first_letter = (name) => {
  return name?.charAt(0).toUpperCase() + name?.slice(1);
};

export const decimeters_to_feet = (length) => {
  return ((length / 10) * 3.2808).toFixed(2);
};

export const hectogram_to_pound = (weight) => {
  return ((weight / 10) * 2.2046).toFixed(2);
};
