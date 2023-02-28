import React from "react";
import styles from "@src/styles/Home.module.css";

export const Loading = () => {
  return (
    <div className={styles["loading-wrapper"]}>
      <div className={styles["loading"]}>
        <div />
      </div>
    </div>
  );
};
