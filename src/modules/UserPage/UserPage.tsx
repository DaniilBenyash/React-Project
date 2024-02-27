import { useEffect } from "react";
import { useParams } from "react-router";
import { useUsersStore } from "src/app/store";
import { CardName } from "./components/CardName";
import { Box } from "./styles";
import { LoaderPage } from "../LoaderPage";

export const UserPage = () => {
    const { id } = useParams();
    const { currentUser, getUserById, loading } = useUsersStore();

    useEffect(() => {
        getUserById(id);
    }, [getUserById, id]);

    if (loading) {
        return <LoaderPage />;
    }

    if (currentUser) {
        return (
            <Box>
                <CardName title="Name:" name={currentUser?.name} />
                <CardName title="UserName:" name={currentUser?.username} />
                <CardName title="Email:" name={currentUser?.email} />
            </Box>
        );
    }
};
