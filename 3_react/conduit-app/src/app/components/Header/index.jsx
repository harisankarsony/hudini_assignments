import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
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
