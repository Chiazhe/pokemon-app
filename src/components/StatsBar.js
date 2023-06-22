import React, { useState, useEffect } from "react";

export default function StatsBar({ baseValue, statName }) {
  let max = Math.floor(
    statName === "hp" ? baseValue * 2 + 204 : (baseValue * 2 + 99) * 1.1
  );

  const [filled, setFilled] = useState(0);

  useEffect(() => {
    if (filled < Math.floor((baseValue / max) * 100)) {
      setTimeout(() => setFilled((prev) => (prev += 1)), 5);
    }
  }, [filled, max, baseValue]);

  return (
    <div className="flex rounded-lg overflow-hidden mb-2">
      <div
        className="text-center bg-zinc-400 dark:bg-slate-600 px-[15px] py-[5px] text-[15px] 
          w-[100px] sm:w-[250px] md:w-[150px]"
      >
        {statName}
      </div>
      <div className="bg-zinc-300 dark:bg-slate-500 flex items-center justify-center px-[15px] py-[5px] w-[225px] md:w-[400px]">
        <div className="relative overflow-hidden w-[90%] h-[15px] rounded bg-zinc-200">
          <div
            style={{
              height: "100%",
              width: `${filled}%`,
              transition: "width 0.5s",
            }}
            className="bg-cyan-500 dark:bg-indigo-300"
          ></div>
          <span
            className="text-black text-xs absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left"
            style={{
              left: `50%`,
            }}
          >
            {`${baseValue}/${max}`}
          </span>
        </div>
      </div>
    </div>
  );
}
