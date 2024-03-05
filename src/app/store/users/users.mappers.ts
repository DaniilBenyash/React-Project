import { UserResponse, User } from "./users.types";

export const usersMapper = ({ name, ...data }: UserResponse): User => ({
    ...data,
    title: name,
})
