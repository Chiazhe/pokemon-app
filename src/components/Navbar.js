import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { TbPokeball } from "react-icons/tb";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : null
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      icon: <BsMoon />,
      text: "dark",
    },
    {
      icon: <BsSun />,
      text: "light",
    },
  ];

  // change the theme everytime button clicked
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      if (!("theme" in localStorage) && darkQuery.matches) {
        element.classList.add("dark");
        setTheme("dark");
      } else {
        element.classList.remove("dark");
        setTheme("light");
      }
    }
  }, [theme]);

  return (
    <nav
      className="flex justify-between w-full py-6 px-12 font-xl border-b-[0.5px] border-zinc-900
      bg-zinc-400 dark:border-slate-300 dark:bg-slate-900"
    >
      <h1 className="flex items-center text-3xl hover:cursor-pointer hover:text-zinc-700 dark:hover:text-gray-300 ">
        <TbPokeball className="mx-2" />
        <span>PokéApp</span>
      </h1>
      <div className="items-center gap-3 text-lg hidden sm:flex ">
        <h3>Pokédex</h3>
        <h3>Types</h3>
        <h3>Locations</h3>
        {options?.map((option) => {
          return (
            <>
              {theme === option.text && (
                <button
                  key={option.text}
                  onClick={() =>
                    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                  }
                  className="border-solid border-black p-2 rounded-full 
                  bg-zinc-200 text-slate-700 dark:bg-slate-200 dark:text-zinc-700"
                >
                  {option.icon}
                </button>
              )}
            </>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
