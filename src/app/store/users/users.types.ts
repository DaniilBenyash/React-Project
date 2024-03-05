export interface UserResponse {
    id: string;
    name: string;
    username: string;
    email: string;
}

export interface User {
    id: string;
    title: string;
    username: string;
    email: string;
}

export interface InitialState {
    users: User[] | null;
    currentUser: User | null;
    loading: boolean;
}


