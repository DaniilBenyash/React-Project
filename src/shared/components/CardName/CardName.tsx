import { Box, Typography } from "@mui/material";

type CardNameProps = {
    title: string;
    name: string;
};

export const CardName = ({ title, name }: CardNameProps) => {
    return (
        <Box>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h3">{name}</Typography>
        </Box>
    );
};
