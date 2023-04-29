import Image from "next/image";
import { ScrollReveal } from "reveal-on-scroll-react";
import styles from "@/styles/Home.module.css";

const Cloud = (): JSX.Element => {
  return (
    <>
      <ScrollReveal.div animation="fade-in" duration={4}>
        <Image
          className={styles.cloud}
          src="/cloudimg.png"
          alt=""
          height={900}
          width={900}
          priority
        />
      </ScrollReveal.div>
    </>
  );
};

export default Cloud;
