import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Projects = (): JSX.Element => {
  return (
    <>
      <h2 id="projects" className={styles.componenth2}>
        {" "}
        Projects{" "}
      </h2>
      <section className={styles.projects}>
        <div className="relative rounded-xl overflow-auto p-8">
          <div className="relative">
            <div className="absolute inset-0 -top-8 -bottom-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-stripes-blue opacity-75 w-full h-full"></div>
              <div className="hidden sm:block bg-stripes-blue opacity-75 w-full h-full"></div>
              <div className="hidden sm:block bg-stripes-blue opacity-75 w-full h-full"></div>
            </div>
            <div className="relative columns-1 sm:columns-3 gap-8">
              <div className="relative aspect-w-16 aspect-h-9">
                <Link
                  href="https://github.com/micklitodev/dynamicportfolio/"
                  target="_blank"
                  className={styles.linkprops}
                >
                  <Image
                    className="w-full object-cover rounded-lg"
                    src="/projects/dynamicportfolioss.png"
                    alt="Portfolio Repo"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </Link>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
              <div className="relative aspect-w-1 aspect-h-1 mt-8">
                <Link
                  href="https://github.com/micklitodev/gen-o-readme/"
                  target="_blank"
                  className={styles.linkprops}
                >
                  <Image
                    className="w-full object-cover rounded-lg"
                    src="/projects/gorscreenshot.png"
                    alt="Generate a README.md file with the CLI"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </Link>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
              <div className="relative aspect-w-1 aspect-h-1 mt-8">
                <Link
                  href="https://github.com/micklitodev/cpuobserver/"
                  target="_blank"
                  className={styles.linkprops}
                >
                  <Image
                    className="w-full object-cover rounded-lg"
                    src="/projects/cpuobserverss.png"
                    alt="Monitor CPU usage with an downloadable App."
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </Link>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
              <div className="hidden sm:block relative aspect-w-1 aspect-h-1 mt-8 sm:mt-0">
                <Link
                  href="https://github.com/micklitodev/moviereel/"
                  target="_blank"
                  className={styles.linkprops}
                >
                  <Image
                    className="w-full object-cover rounded-lg"
                    src="/projects/moviereelss.png"
                    alt="Find where a movie is being streamed"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </Link>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
              <div className="hidden sm:block relative aspect-w-16 aspect-h-9 mt-8">
                <Link
                  href="https://github.com/micklitodev/weathertrackerapi/"
                  target="_blank"
                  className={styles.linkprops}
                >
                  <Image
                    className="w-full object-cover rounded-lg"
                    src="/projects/wapiss.png"
                    alt="Get local weather data"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </Link>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
              <div className="hidden sm:block relative aspect-w-1 aspect-h-1 mt-8">
                <Link
                  href="https://github.com/micklitodev/jquerydayscheduler/"
                  target="_blank"
                  className={styles.linkprops}
                >
                  <Image
                    className="w-full object-cover rounded-lg"
                    src="/projects/dsss.png"
                    alt="Get local weather data"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                </Link>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
              <div className="hidden sm:block relative aspect-w-1 aspect-h-1 mt-8 sm:mt-0">
                <img
                  className="w-full object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1526400473556-aac12354f3db?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
              <div className="hidden sm:block relative aspect-w-1 aspect-h-1 mt-8">
                <img
                  className="w-full object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1587&amp;q=80"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
