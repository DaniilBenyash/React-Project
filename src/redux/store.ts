import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../store/users/users.reducer";

export const store = configureStore({
    reducer: { users: usersReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
