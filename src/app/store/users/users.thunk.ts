import { jsonPlaceholderApi } from "src/app/store/services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserResponse } from "./users.types";
import { usersMapper } from './users.mappers';
import { AxiosResponse } from "axios";

const getUserById = createAsyncThunk<
    ReturnType<typeof usersMapper>,
    string
>(
    "users/getUserById",
    async (userId) => {
        const { data } = await jsonPlaceholderApi.get<UserResponse>(`/users/${userId}`);
        return usersMapper(data);
    },
);

const getAllUsers = createAsyncThunk<
    ReturnType<typeof usersMapper>[],
    void
>("users/getAllUsers", async () => {
    const { data } = await jsonPlaceholderApi.get<UserResponse[]>(`/users`);
    return data.map(usersMapper);
});

export { getUserById, getAllUsers };
