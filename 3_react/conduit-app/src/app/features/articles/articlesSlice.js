"use client";

import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

const initialState = {
  items: [],
  status: "idle",
  error: null,
  articlesCount: 0,
  currentArticleSlug: "monkey",
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const articlesApi = `https://api.realworld.io/api/articles?offset=0&limit=10`;

    const response = token
      ? await axios.get(articlesApi, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      : await axios.get(articlesApi);
    return {
      items: response.data.articles,
      articlesCount: response.data.articlesCount,
    };
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    pageination(state, action) {
      state.items = action.payload;
    },
    // updateArticleSlice(state, action) {
    //   state.currentArticleSlug = action.payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
        state.articlesCount = action.payload.articlesCount;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { pageination, updateArticleSlug } = articlesSlice.actions;

export default articlesSlice.reducer;
