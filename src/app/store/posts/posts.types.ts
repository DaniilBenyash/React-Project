export interface InitialState {
    posts: Post[] | null;
    currentPost: Post | null;
    loading: boolean;
}

export interface Post {
    id: string;
    title: string;
    username: string;
    body: string;
}
