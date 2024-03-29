import { useEffect, useState } from "react";
import { useUsersStore } from "src/app/store";
import { Box } from "./styles";
import { Input } from "src/shared/ui-kit";
import { List, ListItem } from "src/shared/components";

export const AllUsersPage = () => {
    const [searchValue, setSearchValue] = useState("");
    const { users, getAllUsers } = useUsersStore();

    const filterUsers = (value: string) => {
        setSearchValue(value);
    };
    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    return (
        <Box>
            <Input onChange={filterUsers} placeholder="Search" />
            <List title="Users">
                {users
                    ?.filter(post =>
                        post.title
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()),
                    )
                    .map(item => (
                        <ListItem
                            id={item.id}
                            title={item.title}
                            key={item.id}
                        />
                    ))}
            </List>
        </Box>
    );
};
