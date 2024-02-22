import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
    getAllUsers as getAllUsersRequest,
    getUserById as getUserByIdRequest,
} from "./users.thunk";

export const useUsersStore = () => {
    const users = useAppSelector(state => state.users.users);
    const isLoading = useAppSelector(state => state.users.loading);
    const currentUser = useAppSelector(state => state.users.currentUser);

    const dispatch = useAppDispatch();

    const getAllUsers = useCallback(() => {
        const allUser = dispatch(getAllUsersRequest());
        return allUser;
    }, [dispatch]);

    const getUserById = useCallback(
        (userId: string) => {
            const user = dispatch(getUserByIdRequest(userId));
            return user;
        },
        [dispatch],
    );

    return {
        users,
        isLoading,
        currentUser,
        getAllUsers,
        getUserById,
    };
};
