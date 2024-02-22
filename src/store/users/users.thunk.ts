import { jsonPlaceholderApi } from "../../services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./users.types";

const getUserById = createAsyncThunk(
    "users/getUserById",
    async (userId: string) => {
        const response = await jsonPlaceholderApi.get<User>(`/users/${userId}`);
        const user = response.data;
        return user;
    },
);

const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
    const response = await jsonPlaceholderApi.get<User[]>(`/users`);
    const allUsers = response.data;
    return allUsers;
});

export { getUserById, getAllUsers };
