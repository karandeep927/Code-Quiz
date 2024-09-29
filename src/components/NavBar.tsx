import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { CROSS, BARS } from "../constants/icons";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className="p-2 shadow-md border border-t-0 border-l-0 border-r-0 bg-primaryBg border-b-slate-400 flex justify-between items-center pr-5 relative">
      <div className="flex flex-1 items-center gap-3">
        <BARS
          size={23}
          onClick={toggleNavBar}
          className="text-thirdText cursor-pointer sm:hidden" />
        <h1 className="font-bold text-3xl uppercase text-thirdText ">Code Quiz</h1>
      </div>
      <div
        className={`flex flex-col items-center bg-primaryBg  absolute z-10 w-full top-0 p-3 transition-all duration-300 ease-in-out  sm:pt-3 sm:static sm:w-1/2 sm:flex-row ${isOpen ? "left-0" : "-left-[100%]"}`}
      >
        <CROSS
          size={23}
          onClick={toggleNavBar}
          className="absolute text-thirdText right-5  top-5 sm:hidden" />
        {[
          { name: "Home", path: "/" },
          { name: "Quiz's", path: "/quiz" },
          { name: "About", path: "/about" },
          { name: "Sign in", path: "/login" },
        ].map((item) => (
          <Link
            to={item.path}
            className="sm:px-3  cursor-pointer border-b w-full mt-2 z-10 border-b-slate-300 sm:border-none sm:mt-0"
          >
            <h2 className="text-xl text-center text-thirdText hover:bg-thirdBg hover:text-primaryText sm:rounded-lg py-1">
              {item.name}
            </h2>
          </Link>
        ))}
      </div>
      <DarkModeToggle />
    </div>
    <Outlet />
    </>
  );
}

export default NavBar;
