"use client";
import Link from "next/link";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import useAuth from "../useAuth/useAuth";

export default function Header() {
  // const token =
  //   typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const username =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className={styles.header}>
      <Link className={styles.link} href="..">
        <h1 className={styles.h1}>conduit</h1>
      </Link>
      <div className={styles.nav_buttons}>
        <Link className={styles.link} href="..">
          Home
        </Link>
        {useAuth() && isClient ? (
          <>
            <Link className={styles.link} href="/new-article">
              New Article
            </Link>
            <Link className={styles.link} href="/profile">
              {username}
            </Link>
          </>
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
      </div>
    </header>
  );
}
