import React from "react";
import Banner from "./Banner";
import styles from "../styles/Container.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Banner />
      <div className={styles.container}>{children}</div>
    </>
  );
}
