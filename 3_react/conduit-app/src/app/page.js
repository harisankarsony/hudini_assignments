"use client";

import styles from "./page.module.css";
import Feeds from "./components/Feeds";
import Tags from "./components/Tags";
import HomeTitle from "./components/HomeTitle";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <HomeTitle />
        <div className={styles.main_div}>
          <div className={styles.feeds_div}>
            <Feeds />
          </div>
          <div className={styles.tags_div}>
            <Tags />
          </div>
        </div>
      </Provider>
    </>
  );
}
