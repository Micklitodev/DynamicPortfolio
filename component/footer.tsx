import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.footer}>
          <Link href="https://github.com/micklitodev" target="_blank">
            <p>Developed by Mick L.</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Footer;
