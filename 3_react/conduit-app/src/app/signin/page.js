import Link from "next/link";
import styles from "./page.module.css"

export default function SignIN() {

    return(
        <div className={styles.main_div}>
            <h1>Sign in</h1>
            <p><Link className={styles.link} href='./signup'>Need an account?</Link></p>
            <form className={styles.form}>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button> Sign in</button>
            </form>
        </div>
    )
}