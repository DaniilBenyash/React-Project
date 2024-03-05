enum UserRoutes {
    Users = "/users",
    User = "/users/:id",
}

enum PostRoutes {
    Posts = "/posts",
    Post = "/posts/:id",
}
enum MainRoutes {
    Main = "/",
}

export const paths = {
    MainRoutes,
    UserRoutes,
    PostRoutes,
};
