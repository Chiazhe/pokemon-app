import React from "react";
import PrevNextComponent from "../../components/PrevNextComponent";

function PrevAndNextPokemon({ prevPokemon, nextPokemon }) {
  return (
    <div
      className="w-full xs:h-[150px] lg:h-[200px] 
      bg-zinc-500 dark:bg-slate-900 text-zinc-200 dark:text-slate-400 
      mx-auto mt-[40px] flex flex-row justify-between items-center overflow-b-hidden"
    >
      <PrevNextComponent data={prevPokemon} isPrev={true} />
      <PrevNextComponent data={nextPokemon} isPrev={false} />
    </div>
  );
}

export default PrevAndNextPokemon;
