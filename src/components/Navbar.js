// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
            <a className="title-font font-medium text-white mb-4 md:mb-0">
                <a href="#about" className="lg:ml-3 md:ml-3 sm:ml-3 text-xl">
                    Brendan Boyle
                </a>
            </a>
            <nav className="sm:ml-4 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                {/* <a href="#projects" className="mr-3 hover:text-white">
                    Past Work
                </a> */}
                <a href="#skills" className="mr-3 hover:text-white">
                    Skills
                </a>
            </nav>
            <a
                href="https://www.linkedin.com/in/brendan-boyle-02/"
                target="_blank"
                className="sm:ml-3 inline-flex items-center text-white bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"/>
                <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
        </div>
    </header>
  );
}