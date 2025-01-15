import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-0 bg-white dark:bg-gray-900">
        <div className="flex justify-evenly p-2 flex-wrap">
          {/* Left Section */}
          <div className="left flex items-center gap-6">
            <FontAwesomeIcon icon={faBars} aria-label="Menu" />
            <h1 className="font-bold text-3xl">Recipe</h1>
          </div>

          {/* Center Section */}
            <div className="center flex items-center justify-center w-[600px] ">
              <select
                className="h-[35px] px-2 rounded focus:outline-none"
                aria-label="Category Selector"
              >
                <option>All Category</option>
                <option>Dinner</option>
                <option>Breakfast</option>
                <option>Lunch</option>
              </select>
              <input
                type="text"
                className="border w-full md:w-[450px] h-[35px] px-3 focus:outline-none"
                placeholder="Search for recipes"
              />
              <div className="bg-green-400 p-[5px] text-center border rounded-r-full">
              <FontAwesomeIcon
              icon={faMagnifyingGlass}
              aria-label="Search"
              className="ml-2 text-gray-500 "
            />
              </div>
            
          </div>

          {/* Right Section */}
          <div className="right">
            <ul className="flex gap-5 p-4 items-center justify-center">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/Allmeal"
                  className="hover:text-blue-500 transition duration-300"
                >
                  All Meals
                </a>
              </li>
              <li>
                <a
                  href="#meal"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Meal
                </a>
              </li>
              <li>
                <a
                  href="#tag"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Tag
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
