import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = (): JSX.Element => {
  const [reviews, setReviews] = useState<[object]>([
    {
      id: 0,
      rating: 0,
      content: "",
      user_name: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getreviews", {
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setReviews(data.RevArr);
        } else {
          console.error("Failed to fetch reviews");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.main} id="reviews">
      <div>
        <h2 className={styles.componenth2}> Reviews </h2>
        <br />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {reviews.map((rev: any) => (
          <div className={styles.reviewcard} key={rev.id}>
            <div className="h-full flex flex-col">
              <div className="flex-grow bg-white rounded-lg p-2 flex flex-col justify-between leading-normal overflow-hidden">
                <div className="mb-4">
                  <div className="text-gray-600 font-bold text-md mb-2">
                    Rating:
                    {[...Array(rev.rating)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={styles.staricon}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm overflow-hidden">
                    {rev.content}
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="/sampleimg.png"
                    alt=""
                  />
                  <div className="text-sm">
                    <p className="text-gray-800 leading-none">
                      {rev.user_name}
                    </p>
                    <p className="text-gray-600">2/22/2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <br />
        <Link href="/reviewpage">
          <button
            className="
                    w-full
                    px-6
                    py-2.5
                    bg-gray-50
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
            Write a Review!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
