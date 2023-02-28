import React from "react";
import Link from "next/link";
import styles from "@src/styles/Home.module.css";
import { getGraphqlLink } from "@src/utils/helpers/formatter";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  title: string;
  link: string;
  className: string;
}

export const GraphQLLink = ({ title, link, className }: Props) => {
  return (
    <Link href={getGraphqlLink(link)} legacyBehavior>
      <a className={`${styles.card} ${styles[className]}`}>
        <h2 className={inter.className}>{title}</h2>
      </a>
    </Link>
  );
};
