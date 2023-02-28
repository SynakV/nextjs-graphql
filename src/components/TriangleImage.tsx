import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@src/styles/Home.module.css";

interface Props {
  link: string;
  position: "left" | "right";
}

export const TriangleImage = ({ position, link }: Props) => {
  return (
    <Link href={link}>
      <Image
        width={20}
        height={20}
        alt={position}
        src="/icons/triangle.png"
        className={`${styles.arrow} ${styles[position]}`}
      />
    </Link>
  );
};
