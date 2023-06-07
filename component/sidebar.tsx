import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import {
  BiHomeAlt2,
  BiBarChartAlt2,
  BiNetworkChart,
  BiBookContent,
} from "react-icons/bi";

const Sidebar = (): JSX.Element => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = (): any => {
    setNav(!nav);
  };

  return (
    <>
      <div>
        <AiOutlineMenu
          size={50}
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden"
        />
        {nav ? (
          <div className="fixed w-full h-screen bg-white/80 flex flex-col justify-center items-center z-20">
            <Link
              onClick={handleNav}
              href="#about-me"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BiHomeAlt2 size={20} />
              <span className="pl-4">Home</span>
            </Link>

            <Link
              onClick={handleNav}
              href="#skills"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BiBarChartAlt2 size={20} />
              <span className="pl-4">Work</span>
            </Link>

            <Link
              onClick={handleNav}
              href="#pojects"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BiNetworkChart size={20} />
              <span className="pl-4">Projects</span>
            </Link>

            <Link
              onClick={handleNav}
              href="#contact"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BiBookContent size={20} />
              <span className="pl-4">Contact</span>
            </Link>
          </div>
        ) : (
          ""
        )}

        <div className="md:block hidden fixed top-[25%] z-10">
          <div className="flex flex-col">
            <Link
              href="#about-me"
              className="rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BiHomeAlt2 size={20} />
            </Link>
            <Link
              href="#skills"
              className="rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BiBarChartAlt2 size={20} />
            </Link>
            <Link
              href="#projects"
              className="rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BiNetworkChart size={20} />
            </Link>
            <Link
              href="#contact"
              className="rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BiBookContent size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
