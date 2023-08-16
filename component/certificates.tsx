import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "@/styles/Home.module.css";

const spanStyle: object = {
  padding: 8,
  borderRadius: 5,
  background: "rgb(39 39 42)",
  color: "rgb(209 213 219)",
  position: "absolute",
  top: 30,
  fontSize: 14,
};

const divStyle: object = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  maxHeight: 450,
  maxWidth: 570,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  margin: "0 auto",
};

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

const arrowStyle: object = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "rgba(240, 240, 240, 0.8)",
  fontSize: "35px",
  cursor: "pointer",
  marginLeft: "20%",
  marginRight: "20%",
};

const windowStyle: object = {
  backgroundColor: "rgba(15, 15, 17, .8)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const CertSlideShow = (): JSX.Element => {
  const arrowOffset = "10px";

  return (
    <>
      <div
        style={{
          ...windowStyle,
        }}
        className="h-screen"
      >
        <div id="certs">
          <br />
          <h2 className={styles.componenth2darkbg}>My Certifications</h2>
          <br />
          <Slide
            prevArrow={
              <div
                style={{
                  ...arrowStyle,
                  left: `calc(${arrowOffset} - 20px)`,
                }}
              >
                {"<"}
              </div>
            }
            nextArrow={
              <div
                style={{
                  ...arrowStyle,
                  right: `calc(${arrowOffset} - 20px)`,
                }}
              >
                {">"}
              </div>
            }
          >
            {slideImages.map((slideImage, index: number) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  <span style={spanStyle}>{slideImage.caption}</span>
                  <img
                    src={slideImage.url}
                    alt={slideImage.caption}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </>
  );
};

export default CertSlideShow;
