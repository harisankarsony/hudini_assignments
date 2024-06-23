import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./features/articles/articlesSlice";
import tagsReducer from "./features/tags/tagsSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    tags: tagsReducer,
  },
});
