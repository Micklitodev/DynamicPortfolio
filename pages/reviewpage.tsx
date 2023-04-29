import styles from "@/styles/login.module.css";
import { useState } from "react";
import { ScrollReveal } from "reveal-on-scroll-react";

const ReviewPage = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  function handleClick() {
    const ratingInput = document.getElementById("rating") as HTMLInputElement;
    const contentInput = document.getElementById("content") as HTMLInputElement;
    const rating: string = ratingInput.value;
    const content: string = contentInput.value;

    const fetchData = async () => {
      try {
        const response = await fetch("/api/postreview", {
          method: "POST",
          body: JSON.stringify({
            rating: rating,
            content: content,
          }),
        });

        if (response.ok) {
          window.location.href = `/`;
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
                    <a href="/">Home</a>
                  </li>
                </ScrollReveal.div>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg">
        <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Leave a thought about working with me!
            </h2>

            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <label htmlFor="rating">Rating</label>
              <select
                className="form-select block w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300"
                id="rating"
              >
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>
            </div>

            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                id="content"
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required
              ></textarea>
            </div>
            <div className="w-full md:w-full flex items-start md:w-full px-3">
              <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                <svg
                  fill="none"
                  className="w-5 h-5 text-gray-600 mr-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
              </div>
              <div className="-mr-1">
                <input
                  onClick={handleClick}
                  type="button"
                  className="  px-6
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
                  ease-in-out"
                  value="Submit Review"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.signupoption}>
        <br />
        <p>Dont have an profile?</p>
        <br />
        <a className={styles.signuplink} href="/signup">
          Sign Up!
        </a>
      </div>
    </>
  );
};

export default ReviewPage;
