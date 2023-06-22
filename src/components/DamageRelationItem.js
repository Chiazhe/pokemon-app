import React from "react";
import { typeImage, uppercase_first_letter } from "../helpers";
import { useNavigate } from "react-router-dom";

function DamageRelationItem({ type }) {
  const navigate = useNavigate();
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
      onClick={() => navigate(`/type/${type}`)}
      className={`flex items-center gap-2 py-1 px-2 text-black bg-${type} 
        rounded border-2 border-solid border-black hover:cursor-pointer`}
    >
      {typeImage(type)} <div>{uppercase_first_letter(type)}</div>
    </div>
  );
}

export default DamageRelationItem;
