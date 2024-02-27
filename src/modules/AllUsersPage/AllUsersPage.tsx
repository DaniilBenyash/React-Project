import { useUsersStore } from "src/app/store";
import { useEffect } from "react";
import { Box } from "./styles";
import { LoaderPage } from "../LoaderPage";
import { List } from "./components/List";

export const AllUsersPage = () => {
    const { users, getAllUsers, loading } = useUsersStore();

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    if (loading) {
        return <LoaderPage />;
    }

    return (
        <Box>
            <List users={users} />
        </Box>
    );
};
