import { Box, Typography } from "@mui/material";
import { List } from "src/components/List";

export const AllUsersPage = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Users:
            </Typography>
            <List />
        </Box>
    );
};
