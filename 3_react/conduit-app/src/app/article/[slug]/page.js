"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "../../components/Spinner";
import "./page.css";
import Link from "next/link";
import { getDate } from "../../components/Feeds/utils";

function Article({ params }) {
  const counter = useRef(null);
  const [article, setArticle] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const articleApi = `https://api.realworld.io/api/articles/${params.slug}`;

  async function fetchArticleData() {
    const response = await axios.get(articleApi);
    setArticle(response.data.article);
    setIsLoaded(true);
  }

  useEffect(() => fetchArticleData, []);

  return (
    <div className="main_div">
      {isLoaded ? (
        <>
          <div className="header">
            <h1>{article.title}</h1>
            <div className="div2">
              <div className="header-div-right">
                <div className="feed-div1-left">
                  <img className="img" src={article.author.image} />
                  <div className="feed-div1-left-details">
                    <Link className="link" href="/">
                      {article.author.username}
                    </Link>
                    <span className="span">{getDate(article.createdAt)}</span>
                  </div>
                </div>
              </div>
              <button className="button follow-button">
                + Follow {article.author.username}
              </button>
              <button className="button favorite-button">
                💚 Favorite Post
              </button>
            </div>
          </div>
          <div className="body">
            {article.body}
            <div>
              {article.tagList.map((tag) => (
                <span>{tag}</span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Article;
