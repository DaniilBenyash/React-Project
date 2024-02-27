import { jsonPlaceholderApi } from "src/shared/services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./users.types";

const getUserById = createAsyncThunk(
    "users/getUserById",
    async (userId: string) => {
        const { data } = await jsonPlaceholderApi.get<User>(`/users/${userId}`);
        return data;
    },
);

const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
    const { data } = await jsonPlaceholderApi.get<User[]>(`/users`);
    return data;
});

export { getUserById, getAllUsers };
