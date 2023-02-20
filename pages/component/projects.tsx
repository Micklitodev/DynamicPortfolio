import styles from "@/styles/Home.module.css";

const Projects = (): JSX.Element => {
  return (
    <>
      <section className={styles.collage} id='projects'>
        <div className="columns-3xs ...">
          <img className="w-full aspect-video ..." src="/css.png" />
          <img className="w-full aspect-video ..." src="/html.png" />
          <img className="w-full aspect-video ..." src="/html.png" />
        </div>
        <br />
        <div className="columns-3xs ...">
          <img className="w-full aspect-video ..." src="/css.png" />
          <img className="w-full aspect-video ..." src="/html.png" />
          <img className="w-full aspect-video ..." src="/html.png" />
        </div>
      </section>
    </>
  );
};
export default Projects;
