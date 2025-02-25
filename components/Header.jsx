"use client";

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  // Handle category navigation
  const handleSelectChange = (event) => {
    const selectedUrl = event.target.value;
    if (selectedUrl) {
      router.push(selectedUrl);
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }
    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-gray-300 dark:bg-gray-900 shadow-md">
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center p-4 md:hidden">
        {/* Left Section */}
        <div className="flex items-center gap-5">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} aria-label="Menu" />
          </button>
          <h1 className="font-bold text-2xl">
            <Link href="/">Recipe</Link>
          </h1>
        </div>
        
        {/* Search Button */}
        <button onClick={() => setSearchOpen(!searchOpen)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 sm:hidden" />
        </button>
      </div>

      {/* Mobile Search Dropdown (Appears when search is open) */}
      {searchOpen && (
        <div ref={searchRef} className="absolute top-16 left-0 w-full bg-gray-200 dark:bg-gray-800 p-4 shadow-lg">
          <div className="flex flex-col gap-2">
            <select
              onChange={handleSelectChange}
              className="h-[35px] rounded-lg px-2 focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="/Meal/dinner">Dinner</option>
              <option value="/Meal/breakfast">Breakfast</option>
              <option value="/Meal/lunch">Lunch</option>
            </select>
            <input
              type="text"
              className="w-full h-[35px] px-3 rounded-lg focus:outline-none"
              placeholder="Search for recipes"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-[40%] h-[300px] bg-gray-200 dark:bg-gray-800 p-10 shadow-lg rounded-md">
          <ul className="flex flex-col gap-4 ml-5">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/Allmeal" className="hover:text-blue-500">All Meals</Link></li>
            <li><Link href="#meal" className="hover:text-blue-500">Meal</Link></li>
            <li><Link href="#tag" className="hover:text-blue-500">Tag</Link></li>
          </ul>
        </div>
      )}

      {/* Tablet & Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center p-4 px-10">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <FontAwesomeIcon icon={faBars} aria-label="Menu" className="lg:hidden text-lg" />
          <h1 className="font-bold text-3xl">
            <Link href="/">Recipe</Link>
          </h1>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden lg:flex">
          <ul className="flex gap-10 items-center">
            <li><Link href="/" className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link href="/Allmeal" className="hover:text-blue-500 transition">All Meals</Link></li>
            <li><Link href="#meal" className="hover:text-blue-500 transition">Meal</Link></li>
            <li><Link href="#tag" className="hover:text-blue-500 transition">Tag</Link></li>
          </ul>
        </div>

        {/* Right Section - Search & Category */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            onChange={handleSelectChange}
            className="h-[35px] rounded-lg px-2 focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="/Meal/dinner">Dinner</option>
            <option value="/Meal/breakfast">Breakfast</option>
            <option value="/Meal/lunch">Lunch</option>
          </select>
          <div className="relative w-full sm:w-[250px] md:w-[300px] lg:w-[400px]">
            <input
              type="text"
              className="w-full h-[35px] px-3 rounded-lg focus:outline-none"
              placeholder="Search for recipes"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
              <FontAwesomeIcon icon={faMagnifyingGlass} aria-label="Search" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
