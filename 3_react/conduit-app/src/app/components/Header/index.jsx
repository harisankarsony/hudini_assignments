"use client";
import Link from "next/link";
import styles from "./index.module.css";
import axios from "axios";
import { useEffect } from "react";

const token = localStorage.getItem("token");
console.log(token);

export default function Header() {
  useEffect(() => {
    async function getUser(e) {
      try {
        console.log("hihi");
        const userDetails = await axios.get(
          "https://api.realworld.io/api/user",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        console.log(userDetails);
      } catch (err) {
        console.log(err, "error");
      }
    }
    getUser();
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
        <Link className={styles.link} href="./signin">
          Sign in
        </Link>
        <Link className={styles.link} href="./signup">
          Sign up
        </Link>
      </div>
    </header>
  );
}
