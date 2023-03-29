import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import AboutMe from "./component/aboutme";
import Projects from "./component/projects";
import Nav from "./component/nav";
import CertSlideShow from "./component/certificates";
import Contact from "./component/contact";
import Skills from "./component/skills";

import { ScrollReveal } from "reveal-on-scroll-react";

const inter = Inter({ subsets: ["latin"] });

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Mick's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <br />
      <br />
      <br />
      <main>
        <ScrollReveal.div animation="slide-in-bottom">
          <div className={styles.container} style={{height: '100vh'}}>
            <AboutMe />
          </div>
        </ScrollReveal.div>

        <ScrollReveal.div animation="slide-in-right">
          <div className={styles.container}>
            <Skills />
          </div>
        </ScrollReveal.div>

        <ScrollReveal.div animation="slide-in-left">
          <div className={styles.container}>
            <Projects />
          </div>
        </ScrollReveal.div>

        <ScrollReveal.div animation="slide-in-right">
          <div className={styles.container}>
            <CertSlideShow />
          </div>
        </ScrollReveal.div>

        <ScrollReveal.div animation="slide-in-left">
          <div className={styles.container}>
            <Contact />
          </div>
        </ScrollReveal.div>
      </main>
    </>
  );
};

export default Home;
