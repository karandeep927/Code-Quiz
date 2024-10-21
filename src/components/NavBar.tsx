import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { CROSS, BARS } from "../constants/icon";
import { Link, Outlet, useLocation } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  const active = useLocation()
  console.log(active.pathname)
  return (
    <>
    <div className="p-2 shadow-md bg-secondBg border border-t-0 border-l-0 border-r-0 border-b-slate-400 flex justify-between items-center pr-5 relative">
      <div className="flex flex-1 items-center gap-3">
        <BARS
          size={23}
          onClick={toggleNavBar}
          className="text-white cursor-pointer sm:hidden" />
        <h1 className="font-bold text-3xl uppercase text-white ">Code Quiz</h1>
      </div>
      <div
        className={`flex flex-col items-center bg-thirdBg sm:bg-transparent absolute z-10 w-full top-0 p-3 transition-all duration-300 ease-in-out  sm:pt-3 sm:static sm:w-1/2 sm:flex-row sm:justify-between ${isOpen ? "left-0" : "-left-[100%]"}`}
      >
        <CROSS
          size={23}
          onClick={toggleNavBar}
          className="absolute text-white right-5 z-50 top-5 sm:hidden" />
        {[
          { name: "Home", path: "/" },
          { name: "Quiz's", path: "/quiz" },
          { name: "About", path: "/about" },
          { name: "Sign in", path: "/login" },
        ].map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className="cursor-pointer w-full font-bold text-white tracking-wider border-b mt-2 z-10 border-b-slate-300 sm:w-fit sm:border-none sm:mt-0"
          >
            <h2 className={`text-xl text-center px-1 hover:text-primaryText  py-1 ${active.pathname === item.path ? "text-primaryText sm:border-b-4 sm:border-primaryBg":null}`}>
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
