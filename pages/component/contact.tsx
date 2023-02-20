import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Contact = (): JSX.Element => {
  return (
    <>
      <h2 className={styles.componenth2}>Contact Me</h2>
      <section className={styles.contact}>
        <div>
          <a href="https://github.com/Micklitodev">
            <Image
              className={styles.favicon}
              src="/contact/githubfavicon.png"
              alt="github link"
              width={25}
              height={25}
            />
          </a>
        </div>

        <div>
          <a href="tel:4708314159">
            <Image
              className={styles.favicon}
              src="/contact/phonefavicon.png"
              alt="phone link"
              width={25}
              height={25}
            />
          </a>
        </div>

        <div>
          <a href="mailto: micklito.dev@gmail.com">
            <Image
              className={styles.favicon}
              src="/contact/emailfavicon.png"
              alt="email link"
              width={25}
              height={25}
            />
          </a>
        </div>
      </section>
    </>
  );
};
export default Contact;
