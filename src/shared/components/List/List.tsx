import { FC } from "react";
import { Box, List as ListMUI, Typography } from "@mui/material";

type ListProps = {
    children: React.ReactNode;
    title: string;
};

export const List: FC<ListProps> = props => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                {props.title}
            </Typography>
            <Box>
                <nav aria-label="main mailbox folders">
                    <ListMUI disablePadding>{props.children}</ListMUI>
                </nav>
            </Box>
        </Box>
    );
};
