"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white/70 dark:bg-black w-full shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* BLOGGERS Heading */}
        <Link href="/" className="flex items-center">
          <span className=" font-bold text-lg md:text-2xl lg:text-4xl text-black  dark:text-purple-500">
            BLOGGERS
          </span>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-6 dark:text-white">
         
          <Link
            href="/More"
            className="hover:text-purple-500 dark:hover:text-purple-500"
          >
            More
          </Link>
          <Link
            href="/About"
            className="hover:text-purple-500 dark:hover:text-purple-500"
          >
            About
          </Link>
          <Link
            href="/Contact"
            className="hover:text-purple-500 dark:hover:text-purple-500"
          >
            Contact
          </Link>
        </nav>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-4 md:space-x-6 md:w-auto w-full justify-between">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Menu Icon for Mobile */}
          <button
            className="md:hidden flex items-center text-gray-900 dark:text-white focus:outline-none"
            onClick={toggleDropdown}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isDropdownOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isDropdownOpen && (
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md md:hidden">
          <nav className="flex flex-col items-start px-4 py-3 space-y-2">
            
            <Link
              href="/More"
              className="block hover:bg-purple-500 hover:text-white px-4 py-2 rounded"
            >
              More
            </Link>
            <Link
              href="/About"
              className="block hover:bg-purple-500 hover:text-white px-4 py-2 rounded"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="block hover:bg-purple-500 hover:text-white px-4 py-2 rounded"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
