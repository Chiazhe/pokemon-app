import React from "react";
import { typeImage, uppercase_first_letter } from "../helpers";

function DamageRelationItem({ type }) {
  if (type === "NIL") {
    return (
      <div
        className={`flex items-center gap-2 py-1 px-2 text-black bg-lime-400 rounded border-2 border-solid border-black`}
      >
        <div>{type}</div>
      </div>
    );
  }
  return (
    <div
      className={`flex items-center gap-2 py-1 px-2 text-black bg-${type} rounded border-2 border-solid border-black`}
    >
      {typeImage(type)} <div>{uppercase_first_letter(type)}</div>
    </div>
  );
}

export default DamageRelationItem;
