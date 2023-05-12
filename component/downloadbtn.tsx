import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";

const Downloadbtn = (): JSX.Element => {
  const [color, setColor] = useState<object>();
  const [downloaded, setDownloaded] = useState<boolean>(false);

  type colorStyle = {
    filter: string;
  };

  const core: colorStyle = {
    filter:
      "invert(80%) sepia(80%) saturate(1152%) hue-rotate(87deg) brightness(120%) contrast(129%)",
  };

  function handleClick() {
    setDownloaded(true);
  }

  useEffect(() => {
    if (downloaded) {
      setColor(core);
    }
  }, [downloaded]);

  return (
    <>
      <section id="about-me" className={styles.main}>
        <div>
          <a
            href="/downloads/resume.pdf"
            download="MLresume"
            onClick={handleClick}
            className={styles.downloadbtn}
          >
            <Image
              style={color}
              src="/aboutme/dlicon.svg"
              alt="Download"
              width={30}
              height={30}
              priority
            />
          </a>
          <p className={styles.dwnldtxt}> download resume </p>
        </div>
      </section>
    </>
  );
};

export default Downloadbtn;
