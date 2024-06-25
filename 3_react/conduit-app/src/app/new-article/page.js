"use client";

import React, { useEffect } from "react";
import withAuth from "../components/withAuth";
import axios from "axios";

const NewArticle = () => {
  async function submit(e) {
    const url = "https://api.realworld.io/api/articles";

    // Your JWT token
    const jwtToken = localStorage.getItem("token");

    // Headers with Authorization
    const headers = {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    };

    // Data to be sent in the POST request
    const data = {
      article: {
        title: "How to trahbhjbhgin yojhbjhbhyur dragon",
        description: "Ever wonder how?",
        body: "Very carefully.",
        tagList: ["training", "dragons"],
      },
    };

    // Make the POST request
    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  useEffect(() => submit, []);

  return (
    <>
      <form>
        <input type="text" placeholder="Article Title" />
        <input type="text" placeholder="What's this article about?" />
        <input type="text" placeholder="Write your article (in markdown)" />
        <input type="text" placeholder="Enter tags" />
        <button>Publish Article</button>
      </form>
    </>
  );
};

export default withAuth(NewArticle);
