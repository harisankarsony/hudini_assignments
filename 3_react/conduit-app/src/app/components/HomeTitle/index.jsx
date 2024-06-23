import styles from "./index.module.css";

export default function HomeTitle() {
    return(
        <div className={styles.main_div}>
            <h1 className={styles.h1}>conduit</h1>
            <p className={styles.p}>A place to share your knowledge.</p>
        </div>
    )
}