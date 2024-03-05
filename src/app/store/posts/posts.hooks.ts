import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
    getAllPosts as getAllPostsRequest,
    getPostById as getPostByIdRequest,
} from "./posts.thunk";

export const usePostsStore = () => {
    const postState = useAppSelector(state => state.posts);

    const dispatch = useAppDispatch();

    const getAllPosts = useCallback(() => {
        return dispatch(getAllPostsRequest());
    }, [dispatch]);

    const getPostById = useCallback(
        (postId: string) => {
            return dispatch(getPostByIdRequest(postId));
        },
        [dispatch],
    );

    return {
        ...postState,
        getAllPosts,
        getPostById,
    };
};
