import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { ScrollReveal } from "reveal-on-scroll-react";

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
    <ScrollReveal.div>
      <section id="about-me" className={styles.main}>
        <div>
          <h2 className={styles.componenth2}> Hi, I'm Mick. </h2>
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
            Passionate software engineer. Currently holding ten certificates in
            software development. Threw code-cademy and enrolled in Georgia Tech
            for full stack flex. Proficient in writing HTML, CSS, Javascript,
            Typescript, Node.js along associated frameworks such as React, Next,
            Express, Electron. Proficient in working with Non Relational DB's
            such as firebase.io, mongoDB.
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
      </ScrollReveal.div>
    </>
  );
};

export default AboutMe;
