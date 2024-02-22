import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./users.initial-state";
import { clearReducer } from "./users.actions";
import { getAllUsers, getUserById } from "./users.thunk";

export const usersReducer = createReducer(initialState, builder =>
    builder
        .addCase(clearReducer, state => {
            state = initialState;
        })
        .addCase(getUserById.pending, state => {
            state.loading = true;
            state.currentUser = null;
        })
        .addCase(getUserById.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.currentUser = payload;
        })
        .addCase(getUserById.rejected, state => {
            state.users = null;
            state.loading = false;
        })
        .addCase(getAllUsers.pending, state => {
            state.loading = true;
        })
        .addCase(getAllUsers.fulfilled, (state, { payload }) => {
            state.users = payload;
            state.loading = false;
        })
        .addCase(getAllUsers.rejected, state => {
            state.loading = false;
        }),
);
