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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className="image-container">
              <Link href="https://oxygen-dev.vercel.app/" target="_blank">
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
                  OxygenDev:
                  <br />
                  <br />
                  SaaS example web app.
                  <br />
                  <br />
                  Next.js, Typescript, Node, GraphQL, Apollo, JWT, Mongoose,
                  MongoDB, Bcrypt, Tailwind (MERN)
                </div>
              </Link>
            </div>
            <div className="image-container">
              <Link
                href="https://github.com/Micklitodev/projeCritter"
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
                  ProjeCritter:
                  <br />
                  <br />
                  Project Board that stimulates productivity threw task states
                  that effect the animation of a the project creature.
                  <br />
                  <br />
                  React.js, Tailwind, Apollo, Graphql, JWT, Mongoose, Express,
                  Mongo, Bcrypt, Node.js (MERN)
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
                href="https://github.com/micklitodev/Paradise-Ecom"
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
                  Paradise Hemp Dispensary:
                  <br />
                  <br />
                  Search for products sold on Ecom store
                  <br />
                  <br />
                  React, Javascript, Node, GraphQL, Express, Apollo, JWT,
                  Mongoose, MongoDB, Bcrypt, React Bootstrap (MERN)
                </div>
              </Link>
            </div>
            <div className="image-container">
              <Link
                href="https://github.com/Micklitodev/oxygendev-server"
                target="_blank"
              >
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
                  OxygenDev Server:
                  <br />
                  <br />
                  Backend for Oxygen Dev 
                  <br />
                  <br />
                   Typescript, GraphQL, Mongoose, Apollo Server, Node.js 
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
                href="https://github.com/Micklitodev/TaskTracker-Mobile"
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
                  TaskTracker - Mobile:
                  <br />
                  <br />
                  Basic to-do list application for Android Mobile.
                  <br />
                  <br />
                  React-Native, Flask, Python, Axios, Expo, SQLAlchemy
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
                href="https://github.com/Micklitodev/Weather-Machine-Learning"
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
                  Weather Machine Learning:
                  <br />
                  <br />
                  Basic Python Machine Learning App that guesses probability of accurate predictions using a csv and logistic regression. 
                  <br />
                  <br />
                  Python, Numpy, CSV, Machine Learning
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
                  Next.js, Typescript, AWS Lambda, Tailwind, Node.js
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
