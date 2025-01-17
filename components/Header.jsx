"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleSelectChange = (event) => {
    const selectedUrl = event.target.value;
    if (selectedUrl) {
      router.push(selectedUrl); // Navigate without full reload
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-0 bg-white dark:bg-gray-900">
      <div className="flex justify-between p-2 px-10 flex-wrap">
        {/* Left Section */}
        <div className="left flex items-center gap-6">
          <FontAwesomeIcon icon={faBars} aria-label="Menu" />
          <h1 className="font-bold text-3xl">
            <Link href="/">Recipe</Link>
          </h1>
        </div>

       
        {/* center Section */}
        <div className="right w-[500px]">
          <ul className="flex gap-20 p-4 items-center justify-center">
            <li>
              <Link href="/">
                <div className="hover:text-blue-500 transition duration-300">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/Allmeal">
                <div className="hover:text-blue-500 transition duration-300">All Meals</div>
              </Link>
            </li>
            <li>
              <Link href="#meal">
                <div className="hover:text-blue-500 transition duration-300">Meal</div>
              </Link>
            </li>
            <li>
              <Link href="#tag">
                <div className="hover:text-blue-500 transition duration-300">Tag</div>
              </Link>
            </li>
          </ul>
        </div>

         {/* Right Section */}
         <div className="center flex items-center justify-center w-[400px]">
          <select
            onChange={handleSelectChange}
            className="h-[35px] px-2 rounded focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="/Meal/dinner">Dinner</option>
            <option value="/Meal/breakfast">Breakfast</option>
            <option value="/Meal/lunch">Lunch</option>
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
              className="ml-2 text-gray-500"
            />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;
