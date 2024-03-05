import { Link } from "./styles";
import { paths } from "src/app/routing/paths";
import { Box } from "./styles";

export const MainPage = () => {
    return (
        <>
            <Link href={paths.UserRoutes.Users}>
                <Box>Users</Box>
            </Link>
            <Link href={paths.PostRoutes.Posts}>
                <Box>Posts</Box>
            </Link>
        </>
    );
};
