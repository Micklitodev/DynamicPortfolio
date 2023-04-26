import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "reveal-on-scroll-react";

const Projects = (): JSX.Element => {
  return (
    <>
      <ScrollReveal.div>
        <h2 id="projects" className={styles.componenth2}>
          {" "}
          Projects{" "}
        </h2>
        <section className={styles.frontend}>
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
                    {" "}
                    <div className={styles.imgtag}>
                      Typescript, Next.js, Tailwind
                    </div>
                    <Image
                      className="pic w-full object-cover rounded-lg"
                      src="/projects/dynamicportfolioss.png"
                      alt="Portfolio Repo"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="relative aspect-w-1 aspect-h-1 mt-8">
                  <Link
                    href="https://github.com/micklitodev/cpuobserver/"
                    target="_blank"
                    className={styles.linkprops}
                  >
                    <div className={styles.imgtag}>
                      JS, Electron.js, Node.js
                    </div>
                    <Image
                      className="pic w-full object-cover rounded-lg"
                      src="/projects/cpuobserverss.png"
                      alt="Monitor CPU usage with an downloadable App."
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="pic relative aspect-w-1 aspect-h-1 mt-8">
                  <Link
                    href="https://github.com/micklitodev/noteserver/"
                    target="_blank"
                    className={styles.linkprops}
                  >
                    <div className={styles.imgtag}>JS, Express.js, Node.js</div>
                    <Image
                      className="pic w-full object-cover rounded-lg"
                      src="/projects/nsss.png"
                      alt="Express Served Notes."
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="hidden sm:block relative aspect-w-1 aspect-h-1 mt-8 sm:mt-0">
                  <Link
                    href="https://github.com/micklitodev/moviereel/"
                    target="_blank"
                    className={styles.linkprops}
                  >
                    <div className={styles.imgtag}>
                      JS, UtellyAPI, Bulma.css
                    </div>
                    <Image
                      className="pic w-full object-cover rounded-lg"
                      src="/projects/moviereelss.png"
                      alt="Find where a movie is being streamed"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="hidden sm:block relative aspect-w-16 aspect-h-9 mt-8">
                  <Link
                    href="https://github.com/micklitodev/teamprofilegenerator/"
                    target="_blank"
                    className={styles.linkprops}
                  >
                    <div className={styles.imgtag}>Node.js, OOP, Inquirer</div>
                    <Image
                      className="pic w-full object-cover rounded-lg"
                      src="/projects/tpgss.png"
                      alt="Dynamically Generate Team"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="hidden sm:block relative aspect-w-1 aspect-h-1 mt-8">
                  <Link
                    href="https://github.com/micklitodev/weatherTrackerAPI/"
                    target="_blank"
                    className={styles.linkprops}
                  >
                    <div className={styles.imgtag}>JS, Bootstrap, API</div>
                    <Image
                      className="pic w-full object-cover rounded-lg"
                      src="/projects/wapiss.png"
                      alt="Get local weather data"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="hidden sm:block relative aspect-w-1 aspect-h-1 mt-8">
                  <Link
                    href="https://github.com/micklitodev/gen-o-readme/"
                    target="_blank"
                    className={styles.linkprops}
                  >
                    <div className={styles.imgtag}>JS, NODE.JS, .md</div>
                    <Image
                      className=" pic w-full object-cover rounded-lg"
                      src="/projects/gorscreenshot.png"
                      alt="Generate a README.md file with the CLI"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="hidden sm:block relative aspect-w-1 aspect-h-1 mt-8">
                  <Link
                    href="https://github.com/micklitodev/employeeCMS/"
                    target="_blank"
                    className={styles.linkprops}
                  >
                    <div className={styles.imgtag}>
                      Node.js, mySQL, Inquirer
                    </div>
                    <Image
                      className=" pic w-full object-cover rounded-lg"
                      src="/projects/dsss.png"
                      alt="SQL back end"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="hidden sm:block relative aspect-w-1 aspect-h-1 mt-8">
                  <Link
                    href="https://github.com/micklitodev/passwordgenerator/"
                    target="_blank"
                    className={styles.linkprops}
                  >
                    <div className={styles.imgtag}>
                      JS, Random Pass Generator
                    </div>
                    <Image
                      className="pic w-full object-cover rounded-lg"
                      src="/projects/passgenss.png"
                      alt="Coming soon"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal.div>
    </>
  );
};
export default Projects;
