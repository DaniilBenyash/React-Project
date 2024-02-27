import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
    getAllUsers as getAllUsersRequest,
    getUserById as getUserByIdRequest,
} from "./users.thunk";

export const useUsersStore = () => {
    const userState = useAppSelector(state => state.users);

    const dispatch = useAppDispatch();

    const getAllUsers = useCallback(() => {
        return dispatch(getAllUsersRequest());
    }, [dispatch]);

    const getUserById = useCallback(
        (userId: string) => {
            return dispatch(getUserByIdRequest(userId));
        },
        [dispatch],
    );

    return {
        ...userState,
        getAllUsers,
        getUserById,
    };
};
