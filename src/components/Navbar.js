import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import { TbPokeball } from "react-icons/tb";

function Navbar() {
  const navigate = useNavigate();
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
  }, [theme, darkQuery.matches, element.classList]);

  return (
    <nav
      className="relative flex justify-between w-full py-6 px-[5vw] font-xl border-b-[1px] border-zinc-900
      bg-zinc-400 dark:border-slate-300 dark:bg-slate-900 z-[20]"
    >
      <h1
        onClick={() => navigate("/")}
        className="flex items-center text-3xl hover:cursor-pointer hover:text-zinc-700 dark:hover:text-gray-300 "
      >
        <TbPokeball className="mx-2" />
        <span>PokéApp</span>
      </h1>
      <div className="items-center gap-3 text-lg flex ">
        {options?.map((option) => {
          return (
            <React.Fragment key={option.text}>
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
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
