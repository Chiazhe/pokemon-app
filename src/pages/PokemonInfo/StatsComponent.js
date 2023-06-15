import React from "react";
import StatsBar from "../../components/StatsBar";
import DamageRelation from "./DamageRelation";

function StatsComponent({ stats, damageRelationsData }) {
  return (
    <div className="gap-8 px-12 py-8 flex justify-evenly items-center flex-wrap bg-zinc-500 dark:bg-slate-900 border-y-2 border-zinc-50">
      <div className="w-[50%] max-w-[400px]">
        <p className="text-center text-2xl mx-8">Damage Relations</p>
        <DamageRelation damageRelationsData={damageRelationsData} />
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
