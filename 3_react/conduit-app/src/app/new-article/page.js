"use client";

import React, { useState } from "react";
import withAuth from "../components/withAuth";
import axios from "axios";
import { useRouter } from "next/navigation";

const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const router = useRouter();

  async function submit(e) {
    e.preventDefault();

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
        title: title,
        description: about,
        body: content,
        tagList: tags.split(","),
      },
    };

    // Make the POST request
    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log("Success:", response.data);
        router.push(`/article/${response.data.article.slug}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleOnChange(e) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "about") {
      setAbout(e.target.value);
    }
    if (e.target.name === "content") {
      setContent(e.target.value);
    }
    if (e.target.name === "tags") {
      setTags(e.target.value);
    }
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Article Title"
          onChange={handleOnChange}
          name="title"
          value={title}
        />
        <input
          type="text"
          placeholder="What's this article about?"
          onChange={handleOnChange}
          name="about"
          value={about}
        />
        <textarea
          placeholder="Write your article (in markdown)"
          onChange={handleOnChange}
          name="content"
          value={content}
        />
        <input
          type="text"
          placeholder="Enter tags (separated with commas)"
          onChange={handleOnChange}
          name="tags"
          value={tags}
        />
        <button>Publish Article</button>
      </form>
    </>
  );
};

export default withAuth(NewArticle);
