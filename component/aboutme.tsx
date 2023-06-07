import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import Link from "next/link";

type bgobj = {
  url: string;
};

const backgroundObj: bgobj = {
  url: "/bgimg.jpg",
};

const windowStyle: object = {
  backgroundImage: `url(${backgroundObj.url})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const AboutMe = (): JSX.Element => {
  return (
    <>
      <div id="about-me">
        <div
          style={{
            ...windowStyle,
          }}
          className="h-screen"
        >
          <div className="w-full h-screen absolute top-0 left-0 bg-white/0">
            <div
              className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center drop-shadow-[0_.8px_3.5px_rgba(0,0,0,.6)]"
              style={{ color: "white" }}
            >
              <h1 className="sm:text-5xl text-4xl front-bold">Michael L.</h1>
              <h2 className="flex sm:text-3xl text-2xl pt-4">
                I'm a
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    2000,
                    "Creator",
                    2000,
                    "Tech Enthusiast",
                    2000,
                    "Developer",
                    2000,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "1em", paddingLeft: "5px" }}
                />
              </h2>
              <div className="flex justify-between pt-6 max-w-[100px] w-full">
                <Link
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <FaLinkedinIn className="cursor-pointer" size={20} />
                </Link>
                <Link
                  href="https://github.com/micklitodev"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <FaGithub className="cursor-pointer" size={20} />
                </Link>
                <a
                  href="/downloads/resume.pdf"
                  download="/downloads/resume.pdf"
                  style={{ textDecoration: "none" }}
                >
                  <FaDownload className="cursor-pointer" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
