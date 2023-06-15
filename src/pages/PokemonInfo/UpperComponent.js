import React, { useState } from "react";
import {
  decimeters_to_feet,
  getPercentageValue,
  hectogram_to_pound,
  image_url_helper,
  typeImage,
  uppercase_first_letter,
} from "../../helpers";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

function UpperComponent({
  id,
  name,
  description,
  abilities,
  types,
  height,
  weight,
  shape,
  color,
  genderRate,
  baseExp,
  captureRate,
  baseHappiness,
  hatchCounter,
  habitat,
  growthRate,
  heldItem,
}) {
  const [
    isShowingMorePokemonPhysicalData,
    setIsShowingMorePokemonPhysicalData,
  ] = useState(false);
  return (
    <>
      <div
        className="flex mx-[5vw] my-10 flex-col-reverse gap-[30px]
            md:flex-row md:justify-between md:min-h-60vh md:items-center"
      >
        <div className="md:max-w-[600px]">
          <h2 className="text-2xl text-zinc-500 dark:text-slate-400">
            <i>#{id.padStart(4, "0")}</i>
          </h2>
          <h1 className="text-6xl">{uppercase_first_letter(name)}</h1>
          <p className="mb-12 text-lg">{description}</p>
          <h3 className="text-xl uppercase mb-4">Pokémon Physical</h3>

          <div className="text-cyan-900 bg-cyan-500 dark:bg-indigo-300 rounded-xl p-12 my-4 text-lg md:p-6 lg:p-8 ">
            <div className="grid grid-flow-row gap-[4px] grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
              <p>
                Height:{" "}
                <span className="ml-2 text-black">
                  {decimeters_to_feet(height)} ft
                </span>
              </p>
              <p>
                Weight:{" "}
                <span className="ml-2 text-black">
                  {hectogram_to_pound(weight)} lbs
                </span>
              </p>
              <p>
                Shape:{" "}
                <span className="ml-2 text-black">
                  {uppercase_first_letter(shape)}
                </span>
              </p>
              <p>
                Color:{" "}
                <span className="ml-2 text-black">
                  {uppercase_first_letter(color)}
                </span>
              </p>
              <p>
                Gender:{" "}
                {genderRate === -1 ? (
                  <span className="ml-2 text-black">Unknown</span>
                ) : (
                  <span className="ml-2 text-black font-bold">
                    <span className="inline mx-1">
                      {100 - getPercentageValue(genderRate, 8)}%
                      <BsGenderMale className="inline mx-1" />
                    </span>
                    ,
                    <span className="inline mx-1">
                      {getPercentageValue(genderRate, 8)}%
                      <BsGenderFemale className="inline mx-1" />
                    </span>
                  </span>
                )}
              </p>
              <p className={`${!isShowingMorePokemonPhysicalData && "hidden"}`}>
                Base Experience:{" "}
                <span className="ml-2 text-black">{baseExp}</span>
              </p>
              <p className={`${!isShowingMorePokemonPhysicalData && "hidden"}`}>
                Capture Rate:{" "}
                <span className="ml-2 text-black">{captureRate} / 255</span>
              </p>
              <p className={`${!isShowingMorePokemonPhysicalData && "hidden"}`}>
                Base Hapiness:{" "}
                <span className="ml-2 text-black">{baseHappiness} / 255</span>
              </p>
              <p className={`${!isShowingMorePokemonPhysicalData && "hidden"}`}>
                Hatch Counter:{" "}
                <span className="ml-2 text-black">{hatchCounter} cycles</span>
              </p>
              <p className={`${!isShowingMorePokemonPhysicalData && "hidden"}`}>
                Habitat:{" "}
                <span className="ml-2 text-black">
                  {uppercase_first_letter(habitat)}
                </span>
              </p>
              <p className={`${!isShowingMorePokemonPhysicalData && "hidden"}`}>
                Growth Rate:{" "}
                <span className="ml-2 text-black">
                  {uppercase_first_letter(growthRate)}
                </span>
              </p>
            </div>
            <button
              className="mt-4 text-sm underline italic text-blue-900"
              onClick={() =>
                setIsShowingMorePokemonPhysicalData((prev) => !prev)
              }
            >
              {!isShowingMorePokemonPhysicalData
                ? "Load more ..."
                : "Hide ... "}
            </button>
          </div>
          <div className="text-xl my-12">
            <h3 className="uppercase mb-4">Types</h3>
            <div className="flex gap-2 flex-wrap">
              {types.map((type) => (
                <div
                  key={type.name}
                  className={`flex items-center justify-evenly gap-1 text-base text-black px-12 py-1 border-double border-2 border-zinc-600 rounded-lg bg-${type.name}`}
                >
                  {typeImage(type.name)}{" "}
                  {type.name[0].toUpperCase() + type.name.slice(1)}
                </div>
              ))}
            </div>
          </div>
          <div className="my-12">
            <h3 className="text-xl uppercase mb-4">Held Items</h3>
            <div className="flex gap-2 flex-wrap">
              {!heldItem.length ? (
                <p className="text-center bg-rock text-black px-12 py-1 border-double border-2 border-zinc-600 rounded-lg ">
                  Not Applicable
                </p>
              ) : (
                <>
                  {heldItem.map((item) => (
                    <React.Fragment key={item.name}>
                      <div className="flex items-center justify-center text-center bg-rock text-black px-12 py-1 border-double border-2 border-zinc-600 rounded-lg ">
                        <img src={item.image} className="" />
                        <div>
                          <p>{item.name}</p>
                          <p className="text-xs italic">
                            ({item.probability}% chance)
                          </p>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:min-w-[350px] lg:min-w-[500px]">
          <div className="flex flex-col">
            <div className="border-solid rounded-xl m-4 drop-shadow-4xl dark:drop-shadow-4xl-dark">
              <img
                src={image_url_helper(id)}
                className="max-h-[40vh] w-[300px] md:w-[350px] "
              />
            </div>
            <div>
              <h3 className="text-xl text-center uppercase">Abilities</h3>
              <div className="flex justify-center text-xl flex-wrap gap-2">
                {abilities?.map((ability) => (
                  <div
                    key={ability.name}
                    className="relative 
                      before:z-10 
                      before:absolute 
                      before:left-1/2 
                      before:-top-3 
                      before:w-[150px] 
                      before:max-w-xs 
                      before:-translate-x-1/2 
                      before:-translate-y-full 
                      before:rounded-lg 
                      before:bg-cyan-500
                      before:dark:bg-indigo-300
                      before:text-black
                      before:text-sm
                      before:px-4 
                      before:py-2
                      before:invisible 
                      before:content-[attr(data-tip)] 

                      after:z-10 
                      after:absolute 
                      after:left-1/2 
                      after:-top-3 
                      after:h-0 
                      after:w-0 
                      after:-translate-x-1/2 
                      after:border-8 
                      after:border-t-cyan-500
                      after:dark:border-t-indigo-300
                      after:border-l-transparent 
                      after:border-b-transparent 
                      after:border-r-transparent 
                      after:invisible 
                      
                      hover:before:visible hover:after:visible"
                    data-tip={ability.description}
                  >
                    <div className="px-3 py-1 border-double border-2 border-zinc-600 rounded-lg bg-cyan-500 dark:bg-indigo-300 text-black">
                      {uppercase_first_letter(ability.name)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpperComponent;
