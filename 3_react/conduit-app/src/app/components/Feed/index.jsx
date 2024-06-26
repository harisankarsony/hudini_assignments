import Link from "next/link";
import "./index.css";
import { getDate } from "../Feeds/utils";
import useAuth from "../useAuth/useAuth";
import axios from "axios";
import { useRouter } from "next/navigation";

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export default function Feed(params) {
  const feed = params.feedContent;

  const isLoggedIn = useAuth();
  const router = useRouter();

  function updateLikes(e) {
    console.log("clicked", e);

    if (isLoggedIn) {
      const url = `https://api.realworld.io/api/articles/${feed.slug}/favorite`;

      // Your JWT token
      const jwtToken = token;
      console.log(jwtToken);
      // Headers with Authorization
      const headers = {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      };
      console.log(feed.favorited);
      // Make the POST request
      !feed.favorited
        ? axios
            .post(url, {}, { headers: headers })
            .then((response) => {
              console.log("liked:", response.data);
            })
            .catch((error) => {
              console.error("Error:", error);
            })
        : axios
            .delete(url, { headers: headers })
            .then((response) => {
              console.log("unliked:", response.data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
    } else {
      router.push("/signin");
    }
  }

  return (
    <div className="feed">
      <div className="feed-div1">
        <div className="feed-div1-left">
          <img className="img" src={feed.author.image} />
          <div className="feed-div1-left-details">
            <Link className="link" href="/">
              {feed.author.username}
            </Link>
            <span className="span">{getDate(feed.createdAt)}</span>
          </div>
        </div>
        <button
          className="like-button"
          style={feed.favorited ? { backgroundColor: "#73b673" } : {}}
          onClick={(e) => updateLikes(e)}
        >
          💚 {feed.favoritesCount}
        </button>
      </div>
      <div className="feed-div2">
        <Link className="link" href={`/article/${feed.slug}`}>
          <h1>{feed.title}</h1>
          <p>{feed.description}</p>
        </Link>
      </div>
    </div>
  );
}
