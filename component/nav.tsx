import { useEffect, useState } from "react";
import { ScrollReveal } from "reveal-on-scroll-react";
import Link from "next/link";

const Nav = (): JSX.Element => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [userLogState, setUserLogState] = useState<any>(false);
  const [navShade, setNavShade] = useState<string>("w-full bg-gray-50");

  function logoutClick() {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/logoutroute", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: "logout",
          }),
        });

        if (response.ok) {
          sessionStorage.setItem("logstate", "false");
          window.location.href = "/";
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }

  const handleScrollEvt = () => {
    setNavShade("w-full bg-gray-50 shadow-[0_1px_10px_rgba(166,166,166,1)]");
  };

  useEffect(() => {
    const sesslog = sessionStorage.getItem("logstate");
    setUserLogState(sesslog);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScrollEvt);
  }, []);

  return (
    <>
      <nav
        className={navShade}
        style={{ position: "fixed", top: 0, zIndex: 2 }}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <ScrollReveal.div duration={1}>
                  <li className="text-gray-600 hover:text-gray-400">
                    <Link href="#about-me">About Me</Link>
                  </li>
                </ScrollReveal.div>
                <ScrollReveal.div duration={2}>
                  <li className="text-gray-600 hover:text-gray-400">
                    <Link href="#skills">Skills</Link>
                  </li>
                </ScrollReveal.div>
                <ScrollReveal.div duration={3}>
                  <li className="text-gray-600 hover:text-gray-400">
                    <Link href="#projects">Projects</Link>
                  </li>
                </ScrollReveal.div>
                <ScrollReveal.div duration={4}>
                  <li className="text-gray-600 hover:text-gray-400">
                    <Link href="#certs">Certfications</Link>
                  </li>
                </ScrollReveal.div>
                <ScrollReveal.div duration={5}>
                  <li className="text-gray-600 hover:text-gray-400">
                    <Link href="#reviews">Reviews</Link>
                  </li>
                </ScrollReveal.div>
                <ScrollReveal.div duration={6}>
                  <li className="text-gray-600 hover:text-gray-400">
                    <Link href="#contact">Contact</Link>
                  </li>
                </ScrollReveal.div>
                {userLogState == "true" ? (
                  <ScrollReveal.div duration={7}>
                    <li className="text-gray-600 hover:text-gray-400">
                      <button onClick={logoutClick}>Log Out</button>
                    </li>
                  </ScrollReveal.div>
                ) : (
                  <ScrollReveal.div duration={7}>
                    <li className="text-gray-600 hover:text-gray-400">
                      <Link href="/login">Log In</Link>
                    </li>
                  </ScrollReveal.div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
