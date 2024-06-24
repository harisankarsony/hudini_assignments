import { useState, useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import { Spinner } from "../Spinner";

export default function Tags() {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags.items);
  const error = useSelector((state) => state.tags.error);
  const tagsStatus = useSelector((state) => state.tags.status);

  useEffect(() => {
    if (tagsStatus === "idle") {
      dispatch(fetchTags());
    }
  }, []);

  let content;
  if (tagsStatus === "loading") {
    content = <Spinner />;
  } else if (tagsStatus === "succeeded") {
    content = (
      <div className="tags-div">
        {tags.map((tag) => (
          <button key={tag}>{tag}</button>
        ))}
      </div>
    );
  } else if (tagsStatus === "failed") {
    content = <>{error}</>;
  }

  return (
    <div className="main-div">
      <p>Popular Tags</p>
      <div className="content-div">{content}</div>
    </div>
  );
}
