import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./posts.initial-state";
import { clearReducer } from "./posts.actions";
import { getAllPosts, getPostById } from "./posts.thunk";

export const postsReducer = createReducer(initialState, builder =>
    builder
        .addCase(clearReducer, state => {
            state = initialState;
        })
        .addCase(getPostById.pending, state => {
            state.loading = true;
            state.currentPost = null;
        })
        .addCase(getPostById.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.currentPost = payload;
        })
        .addCase(getPostById.rejected, state => {
            state.posts = null;
            state.loading = false;
        })
        .addCase(getAllPosts.pending, state => {
            state.loading = true;
        })
        .addCase(getAllPosts.fulfilled, (state, { payload }) => {
            state.posts = payload;
            state.loading = false;
        })
        .addCase(getAllPosts.rejected, state => {
            state.loading = false;
        }),
);
