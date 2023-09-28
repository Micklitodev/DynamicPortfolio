import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "@/styles/Home.module.css";

type slideobj = [
  {
    url: string;
    caption: string;
  },
  {
    url: string;
    caption: string;
  }
];

const slideImages: slideobj = [
  {
    url: "/certs/fsf.png",
    caption: "Fullstack Flex",
  },
  {
    url: "/certs/typescript.png",
    caption: "TYPESCRIPT",
  },
];

const windowStyle: object = {
  backgroundColor: "rgba(15, 15, 17, .8)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const CertSlideShow = (): JSX.Element => {
  return (
    <>
      <div
        style={{
          ...windowStyle,
        }}
        className="flex items-center justify-center h-screen"
      >
        <div id="certs" className="text-center">
          <h2 className={styles.componenth2darkbg}>My Certifications</h2>
          <br />
          <div className="flex justify-center">
            <div className="" style={{ maxWidth: 780 }}>
              <Carousel showArrows={true} infiniteLoop={true}>
                {slideImages.map((slideImage, index: number) => (
                  <div key={index}>
                    <img
                      src={`${slideImage.url}`}
                      alt={`Product Image ${index + 1}`}
                      className="aspect-[1/1] object-cover object-center rounded-md"
                      style={{ maxHeight: 500, maxWidth: 700 }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default CertSlideShow;
