import { Box, List as ListMUI, Typography } from "@mui/material";
import { ListItem } from "../ListItem";
import { User } from "src/app/store/users/users.types";
import { FC } from "react";

type ListProps = {
    users: User[];
};

export const List: FC<ListProps> = props => {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Users:
            </Typography>
            <Box>
                <nav aria-label="main mailbox folders">
                    <ListMUI disablePadding>
                        {props.users?.map(user => (
                            <ListItem
                                id={user.id}
                                name={user.name}
                                key={user.id}
                            />
                        ))}
                    </ListMUI>
                </nav>
            </Box>
        </>
    );
};
