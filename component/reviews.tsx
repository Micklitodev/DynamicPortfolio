import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = (): JSX.Element => {
  const [reviews, setReviews] = useState<[object]>([
    {
      id: 0,
      rating: 5,
      content: "Michael is awesome to work with!",
      user_name: "testreview",
    },
  ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/getreviews", {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json, text/plain, */*",
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setReviews(data.RevArr);
  //       } else {
  //         console.error("Failed to fetch reviews");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const windowStyle: object = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={{
        ...windowStyle,
      }}
      className="h-screen"
    >
      <section className={styles.main} id="reviews">
        <div>
          <h2 className={styles.componenth2darkbg}> Reviews (currently down, Integrating to Graphql!) </h2>
          <br />
          <br />
        </div>
        <div className="grid grid-cols-3 gap-3 ">
          {reviews.map((rev: any) => (
            <div className={styles.reviewcard} key={rev.id}>
              <div className="h-full flex flex-col">
                <div className="flex-grow shadow-xl rounded-lg p-2 flex flex-col justify-between leading-normal overflow-hidden">
                  <div className="mb-4">
                    <div className="text-white font-bold text-md mb-2">
                      Rating:
                      {[...Array(rev.rating)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className={styles.staricon}
                        />
                      ))}
                    </div>
                    <p className="text-white text-sm overflow-hidden">
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
                      <p className="text-white leading-none">{rev.user_name}</p>
                      <p className="text-white">2/22/2022</p>
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
              className={`
                       px-6
                       py-2.5
                       tracking-wide 
                       bg-zinc-800
                       text-zinc-300
                       font-medium
                       text-sm
                       uppercase
                       rounded
                       shadow-md
                       hover:text-white
                       hover:bg-zinc-900
                       focus:outline-none
                       focus:ring-0
                       active:shadow-lg
                       transition
                       duration-150
                       ease-in-out"
                     `}
            >
              Write a Review!
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
