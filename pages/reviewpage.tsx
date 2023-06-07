import styles from "@/styles/login.module.css";
import { useState, useEffect } from "react";

const ReviewPage = (): JSX.Element => {
  const [userLogState, setUserLogState] = useState<any>(false);

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

  useEffect(() => {
    const sesslog = sessionStorage.getItem("logstate");
    setUserLogState(sesslog);
  }, []);

  return (
    <>
      {userLogState == "true" ? (
        <div>
          <br />
          <br />
          <br />
          <div className="flex justify-center items-center">
            <h1 className="text-white text-3xl">Write a review!</h1>
          </div>
          <div className="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg">
            <form
              className="w-full max-w-xl  rounded-lg px-4 pt-2"
              style={{ backgroundColor: "rgba(35, 35, 37, 1)" }}
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <h2 className="px-4 pt-3 pb-2 text-white text-lg">
                  Leave a thought about working with me!
                </h2>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                  <label htmlFor="rating" className="text-white">
                    Rating
                  </label>
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
                    <p className="text-xs text-gray-400 md:text-sm pt-px">
                      Some HTML is okay.
                    </p>
                  </div>
                  <div className="-mr-1">
                    <input
                      onClick={handleClick}
                      type="button"
                      className={`
                    w-full
                    px-6
                    py-2.5
                    bg-stone-200
                    text-zinc-800
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:text-white
                    hover:bg-black
                    focus:outline-none
                    focus:ring-0
                    active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                  `}
                      value="Submit Review"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className={styles.signupoption}>
          <br />
          <h1 className="text-white text-3xl"> Log in to Leave a review! </h1>
          <br />
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className={`
            px-6
            py-2.5
            bg-stone-200
            text-zinc-800
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:text-white
            hover:bg-black
            focus:outline-none
            focus:ring-0
            active:shadow-lg
            transition
            duration-150
            ease-in-out
          `}
          >
            Click Here to Log In!
          </button>
        </div>
      )}
    </>
  );
};

export default ReviewPage;
