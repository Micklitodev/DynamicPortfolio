import styles from "@/styles/Home.module.css";

import { ScrollReveal } from "reveal-on-scroll-react";

const Skills = (): JSX.Element => {
  return (
    <>
      <ScrollReveal.div>
        <h2 id="skills" className={styles.componenth2}>
          Skills
        </h2>
        <div className={styles.frontend}>
          <h2> Frontend </h2>
          <div>
            <p className={styles.skilltag}> Next.js </p>
            <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
              <div className="eighty h-full rounded-full bg-green-400"></div>
            </div>
            <p className={styles.skilltag}> Typescript </p>
            <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
              <div className="eightyfive h-full rounded-full bg-green-400"></div>
            </div>
            <p className={styles.skilltag}> Tailwind </p>
            <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
              <div className="sixtyfive h-full rounded-full bg-green-400"></div>
            </div>
          </div>
        </div>
        <div className={styles.backend}>
          <h2> Backend </h2>
          <div>
            <p className={styles.skilltag}> Node.js </p>
            <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
              <div className="seventyfive h-full rounded-full bg-green-400"></div>
            </div>
            <p className={styles.skilltag}> Express </p>
            <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
              <div className="seventy h-full rounded-full bg-green-400"></div>
            </div>
            <p className={styles.skilltag}> Mongo </p>
            <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
              <div className="seventy h-full rounded-full bg-green-400"></div>
            </div>
          </div>
        </div>
      </ScrollReveal.div>
    </>
  );
};
export default Skills;
