import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "@/styles/Home.module.css";

type stylediv = {
  display: string;
  alignItems: string;
  justifyContent: string;
  height: number;
  borderRadius: number;
  backgroundSize: string;
  width: string;
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
  padding: 12,
  borderRadius: 5,
  background: "rgb(39 39 42)",
  color: "rgb(209 213 219)",
  position: "absolute",
  top: 50,
};

const divStyle: stylediv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 400,
  borderRadius: 10, 
  backgroundSize: 'cover',
  width: '500px'
};

const slideImages: slideobj = [
  {
    url: "/html.png",
    caption: "HTML",
  },
  {
    url: "/css.png",
    caption: "CSS",
  },
  {
    url: "/js.png",
    caption: "JAVASCRIPT",
  },
  {
    url: "/typescript.png",
    caption: "TYPESCRIPT",
  },
  {
    url: "/react.png",
    caption: "REACT",
  },
  {
    url: "/node.png",
    caption: "NODE.JS",
  },
  {
    url: "/express.png",
    caption: "EXPRESS",
  },
  {
    url: "/mongo.png",
    caption: "MONGODB",
  },
];

const CertSlideShow = (): JSX.Element => {
  return (
    <>
      <h2 className={styles.cert} id='certs'> My Certifications </h2>
      <div id="slideEl" className="slide-container">
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
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default CertSlideShow;
