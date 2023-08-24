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
              href="/"
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
              href="/ProjectsPage"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BiNetworkChart size={20} />
              <span className="pl-4">Projects</span>
            </Link>

            <Link
              onClick={handleNav}
              href="/CertPage"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BiBookContent size={20} />
              <span className="pl-4">Certs</span>
            </Link>

            <Link
              onClick={handleNav}
              href="/ContactPage"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BiBookContent size={20} />
              <span className="pl-4">Contact</span>
            </Link>
          </div>
        ) : (
          ""
        )}

        <div className="md:block hidden fixed top-[20%] z-10">
          <div className="flex flex-col">
            <Link
              href="/"
              className=" custom-box-shadow rounded-full w-14 h-14  custom-sidebar-bg-color m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <div className="flex flex-col items-center">
                <BiHomeAlt2
                  style={{ color: "rgba(240, 240, 240, 0.75)" }}
                  size={18}
                />
                <span  style={{ fontSize: 10, color: 'white' , opacity:.7 }}>Home</span>
              </div>
            </Link>
            <Link
                     href="#skills"
              style={{backdropFilter: 'blur(20px)'}}
              className=" custom-box-shadow rounded-full w-14 h-14 custom-sidebar-bg-color m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <div className="flex flex-col items-center">
                <BiBarChartAlt2
                  style={{ color: "rgba(240, 240, 240, 0.75)" }}
                  size={18}
                />
                <span  style={{ fontSize: 10, color: "white", opacity:.7 }}>Skills</span>
              </div>
            </Link>
            <Link
              href="#projects"
              className="custom-box-shadow rounded-full w-14 h-14 custom-sidebar-bg-color m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <div className="flex flex-col items-center">
                <BiNetworkChart
                  style={{ color: "rgba(240, 240, 240, 0.75)" }}
                  size={18}
                />
                <span  style={{ fontSize: 10, color: "white", opacity:.7 }}>Projects</span>
              </div>
            </Link>
            <Link
              href="#certs"
              className="custom-box-shadow rounded-full w-14 h-14 custom-sidebar-bg-color  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <div className="flex flex-col items-center">
                <BiBookContent
                  style={{ color: "rgba(240, 240, 240, 0.75)" }}
                  size={18}
                />
                <span style={{ fontSize: 10, color: "white", opacity:.7 }}>Certs</span>
              </div>
            </Link>
            <Link
              href="#contact"
              className="custom-box-shadow rounded-full w-14 h-14 custom-sidebar-bg-color m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <div className="flex flex-col items-center">
                <BiBookContent
                  style={{ color: "rgba(240, 240, 240, 0.75)" }}
                  size={18}
                />
                <span  style={{ fontSize: 10, color: "white", opacity:.7 }}>Contact</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
