import { useQuery } from "react-query";
import { fetchType } from "../fetchers";

export const useFetchPokemonType = (type) => {
  const {
    data: typeInformationData,
    isLoading,
    isError,
  } = useQuery(["type-data", type], () => fetchType(type));

  const damageRelations = typeInformationData?.damage_relations || [];
  const damageRelationsData = {};
  // console.log(damageRelations);
  for (const key of Object.keys(damageRelations)) {
    const value = damageRelations[key];
    const dr = value.map((dr) => {
      return dr.name;
    });
    damageRelationsData[key] = dr;
  }

  return { typeInformationData, damageRelationsData, isLoading, isError };
};
