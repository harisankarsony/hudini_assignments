import React from "react";
import styles from "./index.module.css";

export const Spinner = ({ text = "", size = "5em" }) => {
  const header = text ? <h4>{text}</h4> : null;
  return (
    <div className={styles.Spinner}>
      {header}
      <div className={styles.loader} style={{ height: size, width: size }} />
    </div>
  );
};
