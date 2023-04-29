import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { ScrollReveal } from "reveal-on-scroll-react";

const Sidebar = (): JSX.Element => {
  return (
    <>
      <ScrollReveal.div>
        <div className={styles.sidebarContainer}>
          <ul>
            <ScrollReveal.div duration={1}>
              <li>
                <a href="/">
                  <Image
                    className={styles.sidebar}
                    src="/contact/home.png"
                    alt="github link"
                    width={25}
                    height={25}
                  />
                </a>
              </li>
            </ScrollReveal.div>
            <br />
            <ScrollReveal.div duration={2}>
              <li>
                <a href="https://github.com/Micklitodev">
                  <Image
                    className={styles.sidebar}
                    src="/contact/githubfavicon.png"
                    alt="github link"
                    width={25}
                    height={25}
                  />
                </a>
              </li>
            </ScrollReveal.div>
            <ScrollReveal.div duration={3}>
              <li>
                <a href="tel:4708314159">
                  <Image
                    className={styles.sidebar}
                    src="/contact/phonefavicon.png"
                    alt="phone link"
                    width={25}
                    height={25}
                  />
                </a>
              </li>
            </ScrollReveal.div>
            <ScrollReveal.div duration={4}>
              <li>
                <a href="mailto: micklito.dev@gmail.com">
                  <Image
                    className={styles.sidebar}
                    src="/contact/emailfavicon.png"
                    alt="email link"
                    width={25}
                    height={25}
                  />
                </a>
              </li>
            </ScrollReveal.div>
          </ul>
        </div>
      </ScrollReveal.div>
    </>
  );
};

export default Sidebar;
