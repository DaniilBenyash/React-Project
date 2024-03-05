import { paths } from "./paths";
import { createBrowserRouter } from "react-router-dom";
import {
    PostPage,
    MainPage,
    AllPostsPage,
    UserPage,
    AllUsersPage,
} from "src/modules";

export const router = createBrowserRouter([
    {
        path: paths.MainRoutes.Main,
        element: <MainPage />,
    },
    {
        path: paths.UserRoutes.Users,
        element: <AllUsersPage />,
    },
    {
        path: paths.UserRoutes.User,
        element: <UserPage />,
    },
    {
        path: paths.PostRoutes.Posts,
        element: <AllPostsPage />,
    },
    {
        path: paths.PostRoutes.Post,
        element: <PostPage />,
    },
]);
