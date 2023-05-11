import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Cloud = (): JSX.Element => {
  return (
    <>
      <Image
        className={styles.cloud}
        src="/cloudimg.png"
        alt=""
        height={900}
        width={900}
        priority
      />
    </>
  );
};

export default Cloud;
