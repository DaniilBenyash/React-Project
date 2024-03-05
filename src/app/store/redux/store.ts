import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../users/users.reducer";
import { postsReducer } from "../posts/posts.reducer";

export const store = configureStore({
    reducer: { users: usersReducer, posts: postsReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
