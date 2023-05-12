import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { ScrollReveal } from "reveal-on-scroll-react";
import Link from "next/link";

const Sidebar = (): JSX.Element => {
  return (
    <>
      <div className={styles.sidebarContainer}>
        <ul>
          <ScrollReveal.div duration={1}>
            <li>
              <Link href="/">
                <Image
                  className={styles.sidebar}
                  src="/contact/home.png"
                  alt="github link"
                  width={25}
                  height={25}
                />
              </Link>
            </li>
          </ScrollReveal.div>
          <br />
          <ScrollReveal.div duration={2}>
            <li>
              <Link href="https://github.com/Micklitodev" target="_blank">
                <Image
                  className={styles.sidebar}
                  src="/contact/githubfavicon.png"
                  alt="github link"
                  width={25}
                  height={25}
                />
              </Link>
            </li>
          </ScrollReveal.div>
          <ScrollReveal.div duration={3}>
            <li>
              <Link href="tel:4708314159">
                <Image
                  className={styles.sidebar}
                  src="/contact/phonefavicon.png"
                  alt="phone link"
                  width={25}
                  height={25}
                />
              </Link>
            </li>
          </ScrollReveal.div>
          <ScrollReveal.div duration={4}>
            <li>
              <Link href="mailto: micklito.dev@gmail.com">
                <Image
                  className={styles.sidebar}
                  src="/contact/emailfavicon.png"
                  alt="email link"
                  width={25}
                  height={25}
                />
              </Link>
            </li>
          </ScrollReveal.div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
