import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";

const AboutMe = (): JSX.Element => {
  const [color, setColor] = useState<object>();
  const [downloaded, setDownloaded] = useState<boolean>(false);

  type colorStyle = {
    filter: string;
  };

  const core: colorStyle = {
    filter:
      "invert(74%) sepia(83%) saturate(1552%) hue-rotate(87deg) brightness(119%) contrast(159%)",
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
          <h1> Hi, I'm Mick. </h1>
        </div>
        <div>
          <Image
            className="pfp"
            src="/aboutme/pfp.png"
            alt="Profile Picture"
            width={150}
            height={150}
            priority
          />
        </div>  
        <div>
          <p className={styles.description}>
            Self-driven and passionate about software development. Currently
            holding ten certificates in software development. Threw code-cademy
            and enrolled in Georgia Tech for full stack flex. Seeking a Full
            stack Certification and building my portfolio to better position
            myself in the software development job market. Proficient in writing
            HTML, CSS, Javascript, Node.js, Typescript along associated
            frameworks such as React, Express, Electron. Proficient in working
            with Non Relational DB's such as firebase.io, mongoDB. 
          </p>
        </div>
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
        </div>
      </section>
    </>
  );
};

export default AboutMe;