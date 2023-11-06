import styles from "@/styles/Home.module.css";

const Skills = (): JSX.Element => {
  const windowStyle: object = {
    backgroundColor: "rgba(15, 15, 17, .8)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        style={{
          ...windowStyle,
        }}
        className="h-screen"
      >
        <div id="skills">
          <br />
          <h2 className={styles.componenth2darkbg}>Skills</h2>
          <br />
          <br />
          <div className={styles.skillsContainer}>
            <div className={styles.frontend}>
              <h2>Frontend</h2>
              <div>
                <p className={styles.skilltag}>React Native</p>
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`sixtyfive h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
                <p className={styles.skilltag}> React.js </p>
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`ninety h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
                <p className={styles.skilltag}> Typescript </p>
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`eightyfive h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
                <p className={styles.skilltag}> Tailwind </p>
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`eightyfive h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
                <p className={styles.skilltag}> Javascript </p>
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`ninety h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
                <p className={styles.skilltag}> Three.js </p>
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`seventyfive h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles.backend}>
              <h2>Backend</h2>
              <div>
                <p className={styles.skilltag}>Apollo/Graphql</p>
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`ninety h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
                <p className={styles.skilltag}> Python </p>
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`seventyfive h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
                <p className={styles.skilltag}> Mongo/Mongoose </p>
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`eightyfive h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
                <p className={styles.skilltag}> Node.js </p>
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`ninety h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
                <p className={styles.skilltag}> MySQL/Sequelize </p>{" "}
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`eighty h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
                <p className={styles.skilltag}> Next.js </p>
                <div className="h-5 w-60 sm:w-80 lg:w-96 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`eightyfive h-full rounded-full ${styles.barfillcolor}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
