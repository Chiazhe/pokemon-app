import React, { useState } from "react";
import { typeImage } from "../../helpers";
import DamageRelationItem from "../../components/DamageRelationItem";

function DamageRelation({ damageRelationsData }) {
  const [isShowingAttack, setIsShowingAttack] = useState(true);

  return (
    <div>
      <div
        className="flex items-center justify-center gap-2 p-1 rounded-lg mb-4 w-auto px-0
        bg-gray-300/50 dark:bg-slate-600 shadow-lg shadow-300/50"
      >
        <button
          onClick={() => setIsShowingAttack(true)}
          className={`px-6 py-2 rounded-lg  ${
            isShowingAttack ? "bg-gray-100 dark:bg-slate-400" : ""
          }`}
        >
          Attack
        </button>
        <button
          onClick={() => setIsShowingAttack(false)}
          className={`px-6 py-2 rounded-lg  ${
            !isShowingAttack ? "bg-gray-100 dark:bg-slate-400" : ""
          }`}
        >
          Defense
        </button>
      </div>
      <div className={`bg-gray-100/50 dark:bg-slate-600 p-6 rounded-lg`}>
        <div className={`${!isShowingAttack ? "hidden" : ""}`}>
          <div>
            Double Damage To:
            <div className="flex flex-wrap gap-1 mb-4">
              {damageRelationsData?.double_damage_to.length === 0 ? (
                // <div className="py-1 px-2 bg-lime-400 rounded">NIL</div>
                <DamageRelationItem type={"NIL"} />
              ) : (
                damageRelationsData?.double_damage_to.map((type) => (
                  <DamageRelationItem type={type} key={type} />
                ))
              )}
            </div>
          </div>
          <div>
            Half Damage To:
            <div className="flex flex-wrap gap-1 mb-4">
              {damageRelationsData?.half_damage_to.length === 0 ? (
                <DamageRelationItem type={"NIL"} />
              ) : (
                damageRelationsData?.half_damage_to.map((type) => (
                  <DamageRelationItem type={type} key={type} />
                ))
              )}
            </div>
          </div>
          <div>
            No Damage To:
            <div className="flex flex-wrap gap-1 mb-4">
              {damageRelationsData?.no_damage_to.length === 0 ? (
                <DamageRelationItem type={"NIL"} />
              ) : (
                damageRelationsData?.no_damage_to.map((type) => (
                  <DamageRelationItem type={type} key={type} />
                ))
              )}
            </div>
          </div>
        </div>
        <div className={`${isShowingAttack ? "hidden" : ""}`}>
          <div>
            Double Damage From:
            <div className="flex flex-wrap gap-1 mb-4">
              {damageRelationsData?.double_damage_from.length === 0 ? (
                <DamageRelationItem type={"NIL"} />
              ) : (
                damageRelationsData?.double_damage_from.map((type) => (
                  <DamageRelationItem type={type} key={type} />
                ))
              )}
            </div>
          </div>
          <div>
            Half Damage From:
            <div className="flex flex-wrap gap-1 mb-4">
              {damageRelationsData?.half_damage_from.length === 0 ? (
                <DamageRelationItem type={"NIL"} />
              ) : (
                damageRelationsData?.half_damage_from.map((type) => (
                  <DamageRelationItem type={type} key={type} />
                ))
              )}
            </div>
          </div>
          <div>
            No Damage From:
            <div className="flex flex-wrap gap-1 mb-4">
              {damageRelationsData?.no_damage_from.length === 0 ? (
                <DamageRelationItem type={"NIL"} />
              ) : (
                damageRelationsData?.no_damage_from.map((type) => (
                  <DamageRelationItem type={type} key={type} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DamageRelation;
