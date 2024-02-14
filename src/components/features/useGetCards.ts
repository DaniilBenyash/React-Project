import { useEffect, useReducer } from "react";
import { Card } from "./useGetCard";

type ActionTypes = "setData" | "loading" | "error";
type ActionPayload = any;

type ActionReducer = {
    type: ActionTypes;
    payload?: ActionPayload;
};

type InitialState = {
    data: null | Card[];
    isLoading: boolean;
    error: any;
};

const initialState: InitialState = {
    data: null,
    isLoading: true,
    error: false,
};

const reducer = (state: InitialState, action: ActionReducer): InitialState => {
    switch (action.type) {
        case "setData": {
            return {
                data: action.payload,
                isLoading: false,
                error: false,
            };
        }
        case "loading": {
            return {
                data: null,
                isLoading: true,
                error: false,
            };
        }
        case "error": {
            return {
                data: null,
                isLoading: false,
                error: "No data",
            };
        }
        default: {
            return {
                data: null,
                isLoading: false,
                error: "No data",
            };
        }
    }
};

export const useGetCards = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const request = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
            );

            if (!response.ok) throw new Error("No data");

            const data = await response.json();
            dispatch({ type: "setData", payload: data });
        } catch (error) {
            dispatch({ type: "error" });
        }
    };

    useEffect(() => {
        request();
    }, []);

    return {
        cards: state.data,
        error: state.error,
        isLoading: state.isLoading,
    };
};
