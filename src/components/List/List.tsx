import { useUsersStore } from "../../store";
import { useEffect } from "react";
import { Box, CircularProgress, List as ListMUI } from "@mui/material";
import { ListItem } from "../ListItem";

export const List = () => {
    const { users, getAllUsers, isLoading } = useUsersStore();

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    if (isLoading) {
        return (
            <Box sx={{ margin: "0 auto" }}>
                <CircularProgress />
            </Box>
        );
    }
    return (
        <Box>
            <nav aria-label="main mailbox folders">
                <ListMUI disablePadding>
                    {users?.map(user => (
                        <ListItem id={user.id} name={user.name} key={user.id} />
                    ))}
                </ListMUI>
            </nav>
        </Box>
    );
};
