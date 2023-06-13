import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { usePokemon } from "../../hooks/usePokemon";
import { usePokemonSpecies } from "../../hooks/usePokemonSpecies";
import UpperComponent from "./UpperComponent";
import StatsComponent from "./StatsComponent";
import EvolutionComponent from "./EvolutionComponent";

function PokemonInfo() {
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
  } = usePokemon(pokemonName);

  const {
    isLoading: speciesDataIsLoading,
    isError: speciesDataIsError,
    speciesData,
    evolutionData,
  } = usePokemonSpecies(pokemonName);

  if (informationDataIsLoading || speciesDataIsLoading) return <Loader />;
  if (informationDataIsError || speciesDataIsError) return <Error />;

  return (
    <>
      <UpperComponent
        id={JSON.stringify(informationData.id)}
        name={informationData.name}
        description={speciesData.description}
        abilities={abilityData}
        types={typeData}
        height={informationData.height}
        weight={informationData.weight}
        shape={speciesData.shape?.name || "Not Applicable"}
        color={speciesData.color.name}
        genderless={informationData.gender_rate === -1}
        heldItem={itemData}
      />
      <StatsComponent
        stats={informationData.stats}
        image={informationData.sprites.other["official-artwork"].front_default}
      />
      <EvolutionComponent evolution={evolutionData} />
      <button onClick={() => console.log(itemData)}>Chec</button>
    </>
  );
}

export default PokemonInfo;
