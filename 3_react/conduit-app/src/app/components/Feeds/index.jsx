"use client";

import Link from "next/link";
import styles from "./index.module.css";
import Feed from "../Feed";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticles,
  pageination,
} from "../../features/articles/articlesSlice";
import { Spinner } from "../Spinner";
import useAuth from "../useAuth/useAuth";
import axios from "axios";

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export default function Feeds() {
  const counter = useRef(null);
  const limit = 10;

  const isLoggedIn = useAuth();

  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  let articles = useSelector((state) => state.articles.items);
  const articlesCount = useSelector((state) => state.articles.articlesCount);
  const articleStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function generateButtons(count) {
    const buttonInfo = [];
    let text = 1;

    for (let i = 0; i <= count; i = i + limit) {
      buttonInfo.push({ offset: i, text: text });
      text++;
    }

    return buttonInfo;
  }

  const handleOnClick = async (e, off) => {
    setSpinner(true);

    const allButtons = document.getElementsByClassName(styles.button);

    for (let i of allButtons) {
      i.style.background = "#fff";
      i.style.color = "#5cb85c";
    }
    e.target.style.background = "#5cb85c";
    e.target.style.color = "#fff";

    const response = isLoggedIn
      ? await axios.get(
          `https://api.realworld.io/api/articles?offset=${off}&limit=${limit}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      : await axios.get(
          `https://api.realworld.io/api/articles?offset=${off}&limit=${limit}`
        );
    const readableResponse = await response.data;

    setSpinner(false);

    dispatch(pageination(readableResponse.articles));
  };

  let content;
  useEffect(() => {
    if (counter.current < 1) {
      if (articleStatus === "idle") {
        dispatch(fetchArticles());
      }
      counter.current += 1;
    }
  }, [articleStatus, dispatch]);

  if (articleStatus === "loading" || spinner === true) {
    content = <Spinner></Spinner>;
  } else if (articleStatus === "succeeded") {
    content = (
      <>
        <div>
          {articles.map((article) => (
            <Feed key={article.slug} feedContent={article} />
          ))}
        </div>
        <div>
          {generateButtons(articlesCount).map(({ offset, text }) => (
            <button
              className={styles.button}
              key={text}
              onClick={(event) => handleOnClick(event, offset)}
            >
              {text}
            </button>
          ))}
        </div>
      </>
    );
  } else if (articleStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
      {isLoggedIn && isClient ? (
        <div className={styles.feed_links}>
          <Link className={styles.link} href="..">
            Your Feed
          </Link>
          <Link className={styles.link} href="..">
            Gobal Feed
          </Link>
        </div>
      ) : (
        <div className={styles.feed_links}>
          <Link className={styles.link} href="..">
            Gobal Feed
          </Link>
        </div>
      )}
      <div className={styles.content_div}>{content}</div>
    </>
  );
}
