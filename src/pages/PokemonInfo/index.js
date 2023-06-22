import React from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { usePokemon } from "../../hooks/usePokemon";
import { usePokemonSpecies } from "../../hooks/usePokemonSpecies";
import UpperComponent from "./UpperComponent";
import StatsComponent from "./StatsComponent";
import EvolutionComponent from "./EvolutionComponent";
import PrevAndNextPokemon from "./PrevAndNextPokemon";

function PokemonInfo() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { name: pokemonName } = useParams();

  const {
    isLoading: informationDataIsLoading,
    isError: informationDataIsError,
    informationData,
    typeData,
    abilityData,
    prevPokemon,
    nextPokemon,
    itemData,
    damageRelationsData,
  } = usePokemon(pokemonName);

  const {
    isLoading: speciesDataIsLoading,
    isError: speciesDataIsError,
    speciesData,
    evolutionData,
  } = usePokemonSpecies(pokemonName);

  if (informationDataIsLoading || speciesDataIsLoading) return <Loader />;
  if (informationDataIsError || speciesDataIsError)
    return <Error pokemonName={pokemonName} />;

  return (
    <>
      <UpperComponent
        id={JSON.stringify(informationData.id)}
        name={informationData.name}
        description={speciesData.description}
        abilities={abilityData}
        types={typeData}
        height={informationData.height || "Unknown"}
        weight={informationData.weight || "Unknown"}
        shape={speciesData.shape?.name || "Unknown"}
        color={speciesData.color.name || "Unknown"}
        genderRate={speciesData?.gender_rate}
        baseExp={informationData.base_experience || "Unknown"}
        captureRate={speciesData.capture_rate || "Unknown"}
        baseHappiness={speciesData.base_happiness}
        hatchCounter={speciesData.hatch_counter || "Unknown"}
        habitat={speciesData.habitat?.name || "Unknown"}
        growthRate={speciesData.growth_rate?.name || "Unknown"}
        heldItem={itemData}
      />
      <StatsComponent
        stats={informationData.stats}
        image={informationData.sprites.other["official-artwork"].front_default}
        damageRelationsData={damageRelationsData}
      />
      <EvolutionComponent evolution={evolutionData} />
      <PrevAndNextPokemon prevPokemon={prevPokemon} nextPokemon={nextPokemon} />
    </>
  );
}

export default PokemonInfo;
