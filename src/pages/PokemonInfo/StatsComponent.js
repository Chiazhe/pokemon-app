import React from "react";
import StatsBar from "../../components/StatsBar";

function StatsComponent({ stats, image }) {
  return (
    <div className="gap-8 px-12 py-8 flex justify-evenly items-center flex-wrap bg-zinc-500 dark:bg-slate-900 border-y-2 border-zinc-50">
      <div className="flex flex-col drop-shadow-4xl-dark">
        <img
          src={image}
          alt="pokemon-img"
          className="max-w-[300px] w-[80%] mx-auto"
        />
      </div>
      <div className="">
        <p className="text-center text-2xl mx-8">Attributes</p>
        {stats.map((stat) => (
          <StatsBar
            key={stat.stat.name}
            baseValue={stat.base_stat}
            statName={stat.stat.name
              .toUpperCase()
              .replace("SPECIAL", "S")
              .replace("ATTACK", "ATK")
              .replace("DEFENSE", "DEF")}
          />
        ))}
      </div>
    </div>
  );
}

export default StatsComponent;
