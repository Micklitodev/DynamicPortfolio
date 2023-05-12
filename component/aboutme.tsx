import Image from "next/image";
import styles from "@/styles/Home.module.css";

const AboutMe = (): JSX.Element => {
  return (
    <>
      <section id="about-me" className={styles.main}>
        <div>
          <h2 className={styles.componenth2}> Hi, I'm Mick. </h2>
        </div>
        <div>
          <Image
            className="pfp"
            src="/aboutme/0-1.png"
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
            such as firebase.io, mongoDB and Relational DB's like MySQL and
            ORM's like sequelize.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
