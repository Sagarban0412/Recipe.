import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <nav className=" sticky top-0 z-50 backdrop-blur-0 bg-white dark:bg-gray-900">
        <div className="flex justify-evenly">
          <div className="left flex justify-between items-center gap-6">
            <FontAwesomeIcon icon={faBars} />
            <h1 className="font-bold text-3xl">Recipe</h1>
          </div>
          <div className="center flex items-center">
            <select className=" h-[25px]">
              <option> Dinner</option>
              <option> Breakfast</option>
              <option> Lunch</option>
            </select>
            <input type="text" className="border w-[450px] h-[25px] " />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="right">
            <ul className="flex gap-10 p-4 items-center justify-center ">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Allmeal">All Meals</a>
              </li>
              <li>
                <a href="#meal">Meal</a>
              </li>
              <li>
                <a href="#tag">Tag</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
