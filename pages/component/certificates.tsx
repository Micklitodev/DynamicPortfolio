import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "@/styles/Home.module.css";

type stylediv = {
  display: string;
  alignItems: string;
  justifyContent: string;
  borderRadius: number;
  maxHeight: number;
  maxWidth: number;
  backgroundSize: string;
  backgroundPosition: string;
};

type slideobj = [
  {
    url: string;
    caption: string;
  },
  {
    url: string;
    caption: string;
  },
  {
    url: string;
    caption: string;
  },
  {
    url: string;
    caption: string;
  },
  {
    url: string;
    caption: string;
  },
  {
    url: string;
    caption: string;
  },
  {
    url: string;
    caption: string;
  },
  {
    url: string;
    caption: string;
  }
];

const spanStyle: object = {
  padding: 8,
  borderRadius: 5,
  background: "rgb(39 39 42)",
  color: "rgb(209 213 219)",
  position: "absolute",
  top: 30,
  fontSize: 14,
};

const divStyle: stylediv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  maxHeight: 450,
  maxWidth: 570,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const slideImages: slideobj = [
  {
    url: "/certs/html.png",
    caption: "HTML",
  },
  {
    url: "/certs/css.png",
    caption: "CSS",
  },
  {
    url: "/certs/js.png",
    caption: "JAVASCRIPT",
  },
  {
    url: "/certs/typescript.png",
    caption: "TYPESCRIPT",
  },
  {
    url: "/certs/react.png",
    caption: "REACT",
  },
  {
    url: "/certs/node.png",
    caption: "NODE.JS",
  },
  {
    url: "/certs/express.png",
    caption: "EXPRESS",
  },
  {
    url: "/certs/mongo.png",
    caption: "MONGODB",
  },
];

const CertSlideShow = (): JSX.Element => {
  return (
    <>
      <h2 className={styles.componenth2} id="certs">
        My Certifications
      </h2>
      <div className={styles.slidecontainer}>
        <Slide>
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
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default CertSlideShow;
