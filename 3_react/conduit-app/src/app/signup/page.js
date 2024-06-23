import Link from "next/link";
import styles from "./page.module.css";

export default function SignUp() {
    return(
        <div className={styles.main_div}>
            <h1>Sign up</h1>
            <p><Link className={styles.link} href='./signin'>Have an account?</Link></p>
            <form className={styles.form}>
                <input type="text" placeholder="Username"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button> Sign up</button>
            </form>
        </div>
    )
}