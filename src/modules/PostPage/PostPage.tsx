import { useEffect } from "react";
import { useParams } from "react-router";
import { usePostsStore } from "src/app/store";
import { Box } from "./styles";
import { Button } from "src/shared/ui-kit";
import { CardName } from "src/shared/components";
import { useNavigate } from "react-router-dom";

export const PostPage = () => {
    const { id } = useParams();
    const { currentPost, getPostById } = usePostsStore();
    const navigate = useNavigate();

    useEffect(() => {
        getPostById(id);
    }, [getPostById, id]);

    return (
        <Box>
            <CardName title="Title:" name={currentPost?.title} />
            <CardName title="Username:" name={currentPost?.username} />
            <CardName title="Text:" name={currentPost?.body} />
            <Button text="Back" onClick={() => navigate(-1)} />
        </Box>
    );
};
