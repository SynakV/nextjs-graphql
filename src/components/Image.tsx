import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@src/styles/Home.module.css";

export const HeaderImage = () => {
  return (
    <Link href="/">
      <div className={styles.center}>
        <Image
          priority
          width={180}
          height={37}
          src="/next.svg"
          alt="Next.js Logo"
          className={styles.logo}
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
    </Link>
  );
};
