import { jsonPlaceholderApi } from "src/app/store/services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "./posts.types";
import { AxiosResponse } from "axios";

const getPostById = createAsyncThunk<AxiosResponse<Post>["data"], string>(
    "users/getPostById",
    async postId => {
        const { data } = await jsonPlaceholderApi.get<Post>(`/posts/${postId}`);
        return data;
    },
);

const getAllPosts = createAsyncThunk<AxiosResponse<Post[]>["data"], void>(
    "users/getAllPosts",
    async () => {
        const { data } = await jsonPlaceholderApi.get<Post[]>(`/posts`);
        return data;
    },
);

export { getPostById, getAllPosts };
