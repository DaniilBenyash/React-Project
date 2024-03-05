import { useEffect } from "react";
import { useParams } from "react-router";
import { useUsersStore } from "src/app/store";
import { Box } from "./styles";
import { CardName } from "src/shared/components";
import { Button } from "src/shared/ui-kit";
import { useNavigate } from "react-router-dom";

export const UserPage = () => {
    const { id } = useParams();
    const { currentUser, getUserById } = useUsersStore();
    const navigate = useNavigate();

    useEffect(() => {
        getUserById(id);
    }, [getUserById, id]);

    return (
        <Box>
            <CardName title="Name:" name={currentUser?.title} />
            <CardName title="UserName:" name={currentUser?.username} />
            <CardName title="Email:" name={currentUser?.email} />
            <Button text="Back" onClick={() => navigate(-1)} />
        </Box>
    );
};
