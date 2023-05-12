import styles from "@/styles/signup.module.css";
import { useState } from "react";
import { ScrollReveal } from "reveal-on-scroll-react";
import Link from "next/link";

const Signup = (): JSX.Element => {
  const [navbar, setNavbar] = useState<boolean>(false);

  function handleClick() {
    const emailInput = document.getElementById("emailval") as HTMLInputElement;
    const usernameInput = document.getElementById(
      "usernameval"
    ) as HTMLInputElement;
    const passwordInput = document.getElementById(
      "passwordval"
    ) as HTMLInputElement;

    const email: string = emailInput.value;
    const username: string = usernameInput.value;
    const password: string = passwordInput.value;

    console.log(email, password, username);

    const fetchData = async () => {
      try {
        const response = await fetch("/api/signuproute", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        });
        if (response.status === 200) {
          window.location.href = "/#reviews";
        } else {
          alert("Email Already exists. Please try again");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }

  return (
    <>
      <nav
        className="w-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 shadow"
        style={{ position: "fixed", top: 0, zIndex: 2 }}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <h2 className="text-2xl font-bold"></h2>
              </a>
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
                  <li className="text-gray-600 hover:text-blue-300">
                    <Link href="/">Home</Link>
                  </li>
                </ScrollReveal.div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="emailval"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="usernameval"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="passwordval"
              type="password"
              placeholder="******************"
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleClick}
              className="
                      w-full
                      px-6
                      py-2.5
                      bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200
                      text-gray-700
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      rounded
                      shadow-md
                      hover: hover:shadow-lg
                      focus: focus:shadow-lg focus:outline-none focus:ring-0
                      active: active:shadow-lg
                      transition
                      duration-150
                      ease-in-out
                      "
            >
              Sign Up
            </button>
          </div>
          <div className={styles.loginoption}>
            <br />
            <p>Already Have a Profile?</p>
            <br />
            <Link className={styles.loginlink} href="/login">
              Log in!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
