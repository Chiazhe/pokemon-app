import {
  GiStonePile,
  GiElectric,
  GiLadybug,
  GiPoisonBottle,
  GiFairyWand,
  GiLindenLeaf,
  GiWaterDrop,
  GiDividedSpiral,
  GiMetalBar,
  GiFist,
  GiIceCube,
  GiSpikedDragonHead,
  GiMountainCave,
  GiBatWing,
} from "react-icons/gi";
import { FaGhost } from "react-icons/fa";
import { BiCircle } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";

export const image_url_helper = (id) => {
  if (typeof id !== "string") id = JSON.stringify(id);
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const pad_zero_in_front_id = (id) => {
  if (typeof id !== "string") id = JSON.stringify(id);
  return id.padStart(4, "0");
};

export const uppercase_first_letter = (name) => {
  return name?.charAt(0).toUpperCase() + name?.slice(1);
};

export const getPercentageValue = (val, max) => {
  return parseInt((val / max) * 100);
};

export const decimeters_to_feet = (length) => {
  return ((length / 10) * 3.2808).toFixed(2);
};

export const hectogram_to_pound = (weight) => {
  return ((weight / 10) * 2.2046).toFixed(2);
};

export const typeImage = (type) => {
  switch (type) {
    case "rock":
      return <GiStonePile />;
    case "ghost":
      return <FaGhost />;
    case "electric":
      return <GiElectric />;
    case "bug":
      return <GiLadybug />;
    case "poison":
      return <GiPoisonBottle />;
    case "normal":
      return <BiCircle />;
    case "fairy":
      return <GiFairyWand />;
    case "fire":
      return <BsFire />;
    case "grass":
      return <GiLindenLeaf />;
    case "water":
      return <GiWaterDrop />;
    case "psychic":
      return <GiDividedSpiral />;
    case "steel":
      return <GiMetalBar />;
    case "dark":
      return <MdDarkMode />;
    case "fighting":
      return <GiFist />;
    case "ice":
      return <GiIceCube />;
    case "dragon":
      return <GiSpikedDragonHead />;
    case "ground":
      return <GiMountainCave />;
    case "flying":
      return <GiBatWing />;
    default:
      return <GrStatusUnknown />;
  }
};
