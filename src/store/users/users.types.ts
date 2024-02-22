export interface InitialState {
    users: User[] | null;
    currentUser: User | null;
    loading: boolean;
}

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
}
