import { useEffect } from "react";
import { useParams } from "react-router";
import { useUsersStore } from "src/store";
import { CardName } from "../CardName";
import { Box, CircularProgress } from "@mui/material";

export const Card = () => {
    const { id } = useParams();
    const { currentUser, getUserById, isLoading } = useUsersStore();

    useEffect(() => {
        getUserById(id);
    }, [getUserById, id]);

    if (isLoading) {
        return (
            <Box sx={{ margin: "0 auto" }}>
                <CircularProgress />
            </Box>
        );
    }
    if (currentUser) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <CardName title="Name: " name={currentUser?.name} />
                <CardName title="UserName: " name={currentUser?.username} />
                <CardName title="Email: " name={currentUser?.email} />
            </Box>
        );
    }
};
