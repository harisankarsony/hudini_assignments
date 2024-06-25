"use client";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  return (
    <header className={styles.header}>
      <Link className={styles.link} href="..">
        <h1 className={styles.h1}>conduit</h1>
      </Link>
      <div className={styles.nav_buttons}>
        <Link className={styles.link} href="..">
          Home
        </Link>
        {token ? (
          ""
        ) : (
          <>
            <Link className={styles.link} href="./signin">
              Sign in
            </Link>
            <Link className={styles.link} href="./signup">
              Sign up
            </Link>
          </>
        )}
        <Link className={styles.link} href="/">
          {username}
        </Link>
      </div>
    </header>
  );
}
