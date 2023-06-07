import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const Projects = (): JSX.Element => {
  return (
    <>
      <div className={styles.projectcontainer}>
        <h2 id="projects" className={styles.componenth2darkbg}>
          Projects
        </h2>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className="image-container">
              <Link
                href="https://github.com/Micklitodev/projeCritter"
                target="_blank"
              >
                <Image
                  title="Test Image 1"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/projecritter.png"
                  alt=""
                  height={500}
                  width={500}
                  priority
                />
                <div className="image-overlay">
                  {" "}
                  Proje-Critter:
                  <br />
                  <br />
                  Kanban Board that promotes productivity as task change the
                  mood of your critter.
                  <br />
                  <br />
                  React, Node, GraphQL, Apollo, JWT, Mongoose, MongoDB, Express,
                  Bcrypt, Tailwind (MERN)
                </div>
              </Link>
            </div>
            <div className="image-container">
              <Link
                href="https://github.com/Micklitodev/Social-Network-API"
                target="_blank"
              >
                <Image
                  title="Test Image 2"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/network.jpg"
                  alt=""
                  height={500}
                  width={500}
                  priority
                />
                <div className="image-overlay">
                  Social Network API:
                  <br />
                  <br />
                  JS, MongoDB, Mongoose ORM, Express.js, Node.js
                  <br />
                  <br />
                  Backend API of a Social Network webpage.
                </div>
              </Link>
            </div>
            <div className="image-container">
              <Link
                href="https://github.com/micklitodev/noteserver/"
                target="_blank"
              >
                <Image
                  title="Test Image 3"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/noteserver.jpg"
                  alt=""
                  height={500}
                  width={500}
                  priority
                />
                <div className="image-overlay">
                  Note Server:
                  <br />
                  <br />
                  take notes with SSR application that uses data persistence.
                  <br />
                  <br />
                  Express.js, Node.js, JS
                </div>
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="image-container">
              <Link
                href="https://github.com/micklitodev/astro-atlas"
                target="_blank"
              >
                <Image
                  title="Test Image 4"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/lib4.png"
                  alt=""
                  height={500}
                  width={500}
                  priority
                />
                <div className="image-overlay">
                  Astro-Atlas:
                  <br />
                  <br />
                  Search for and save books that you are interested in.
                  <br />
                  <br />
                  React, Node, GraphQL, Apollo, JWT, Mongoose, MongoDB, Express,
                  Bcrypt, React Bootstrap (MERN)
                </div>
              </Link>
            </div>
            <div className="image-container">
              <Link href="https://github.com/micklitodev/JATE" target="_blank">
                <Image
                  title="Test Image 5"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/jate.png"
                  alt=""
                  height={500}
                  width={500}
                  priority
                />
                <div className="image-overlay">
                  JATE:
                  <br />
                  <br />
                  Progressive web as that is JATE (Just Another Text Editor)
                  <br />
                  <br />
                  PWA, JS, Node.js, Express.js, Webpack, IDB, Babel
                </div>
              </Link>
            </div>
            <div className="image-container">
              <Link
                href="https://github.com/Micklitodev/CPUObserver"
                target="_blank"
              >
                <Image
                  title="Test Image 6"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/observer.jpg"
                  alt=""
                  height={500}
                  width={500}
                  priority
                />
                <div className="image-overlay">
                  CPU Observer:
                  <br />
                  <br />
                  App users can download to monitor Memory / CPU usage.
                  <br />
                  <br />
                  Electron.js, Node.js, JS
                </div>
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="image-container">
              <Link
                href="https://github.com/micklitodev/Georgia-on-your-mind"
                target="_blank"
              >
                <Image
                  title="Test Image 7"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/snowpark.png"
                  alt=""
                  height={500}
                  width={500}
                  priority
                />
                <div className="image-overlay">
                  Parkify:
                  <br />
                  <br />
                  Leave reviews and tell us about your visit at Georgia state
                  parks.
                  <br />
                  <br />
                  Fullstack, MVC , JS, Bcrypt, Express-Sessions, Sequelize,
                  MySQL, Node, Handlebars.js
                </div>
              </Link>
            </div>
            <div className="image-container">
              <Link
                href="https://github.com/Micklitodev/Ecom-Backend"
                target="_blank"
              >
                <Image
                  title="Test Image 8"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/ecomcart5.png"
                  alt=""
                  height={500}
                  width={500}
                  priority
                />
                <div className="image-overlay">
                  Ecom-Backend:
                  <br />
                  <br />
                  Backend Build of an E-commerce webpage.
                  <br />
                  <br />
                  JS, ORM Sequelize, Express.js, SQL, Node.js
                </div>
              </Link>
            </div>
            <div className="image-container">
              <Link
                href="https://github.com/Micklitodev/TeamProfileGenerator"
                target="_blank"
              >
                <Image
                  title="Test Image 9"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/teamprofile.jpg"
                  alt=""
                  height={500}
                  width={500}
                  priority
                />
                <div className="image-overlay">
                  Team Profile Generator:
                  <br />
                  <br />
                  App that will dynamically generate a html page from CLI
                  inputs.
                  <br />
                  <br />
                  JS, Node.js, Jest Unit Testing, OOP
                </div>
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="image-container">
              <Link
                href="https://github.com/micklitodev/dev-blog"
                target="_blank"
              >
                <Image
                  title="Test Image 10"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/devblog.png"
                  alt=""
                  width={500}
                  height={500}
                  priority
                />
                <div className="image-overlay">
                  Dev-Blog:
                  <br />
                  <br />
                  Blog to show the latest tech updates in the software industry.
                  <br />
                  <br />
                  Fullstack, MVC , JS, Bcrypt, Sessions, Sequelize, MySQL, Node
                </div>
              </Link>
            </div>
            <div className="image-container">
              <Link
                href="https://github.com/Micklitodev/dynamicPortfolio"
                target="_blank"
              >
                <Image
                  title="Test Image 13"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/dynamicportfolio.png"
                  alt=""
                  height={500}
                  width={500}
                  priority
                />
                <div className="image-overlay">
                  Dynamic Portfolio:
                  <br />
                  <br />
                  Portfolio to display yourself as a developer, where your
                  colleagues can leave reviews on working with you.
                  <br />
                  <br />
                  Fullstack, Next.js, Typescript, TSX, Tailwind, Dynamic
                  Routing, MVC, Express-Sessions, Sequelize, MySQL, Bcrypt,
                  Node.js
                </div>
              </Link>
            </div>
            <div className="image-container">
              <Link
                href="https://github.com/Micklitodev/EmployeeCMS"
                target="_blank"
              >
                <Image
                  title="Test Image 11"
                  className="h-auto max-w-full rounded-lg"
                  src="/projects/cmsimg.jpg"
                  alt=""
                  height={500}
                  width={500}
                  priority
                />
                <div className="image-overlay">
                  Employee CMS:
                  <br />
                  <br />
                  Mgmt. System for employers, to easily manage company data.
                  <br />
                  <br />
                  Node.js, mySQL, OOP
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .image-container {
          position: relative;
        }

        .image-overlay {
          position: absolute;
          padding: 5px;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          font-size: 0.8rem;
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .image-container:hover .image-overlay {
          opacity: 1;
        }

        .image-container:hover img {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
};

export default Projects;
