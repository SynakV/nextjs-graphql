import React from "react";
import { Loading } from "./Loading";
import { HeaderImage } from "./Image";
import { DataType } from "@src/utils/types";
import { TriangleImage } from "./TriangleImage";
import styles from "@src/styles/Home.module.css";
import { getFormattedJSON, getRouterLinks } from "@src/utils/helpers/formatter";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  title: string;
  data: {
    fromSsr?: any;
    fromHook?: any;
    fromFunction?: any;
  };
}

export const FormattedData = ({ title, data }: Props) => {
  const { prevRoute, nextRoute } = getRouterLinks(title);

  const isAllDataLoaded = Object.values(data).every(
    (data) => data !== undefined
  );

  const { fromSsr, fromHook, fromFunction } = data;

  const getDataElement = (data: any, type: DataType) => {
    const types = {
      ssr: "From SSR",
      hook: "From hook",
      function: "From function",
    };

    return (
      <div className={styles.flex}>
        <a className={`${styles.card}`}>
          <h2 className={inter.className}>{types[type]}</h2>
          <div
            className={inter.className}
            dangerouslySetInnerHTML={{
              __html: getFormattedJSON(data),
            }}
          />
        </a>
      </div>
    );
  };

  return (
    <>
      <HeaderImage />

      <div className={styles["header"]}>
        <TriangleImage position="left" link={prevRoute} />
        <h1 className={`${inter.className} ${styles.title}`}>{title}</h1>
        <TriangleImage position="right" link={nextRoute} />
      </div>

      {isAllDataLoaded ? (
        <div className={`${styles.flex} ${styles.row}`}>
          {fromSsr && getDataElement(fromSsr, "ssr")}
          {fromHook && getDataElement(fromHook, "hook")}
          {fromFunction && getDataElement(fromFunction, "function")}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
