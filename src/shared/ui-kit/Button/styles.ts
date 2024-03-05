import { styled, Button as ButtonMUI } from "@mui/material";

export const Button = styled(ButtonMUI)(
    ({ theme }) => `
        &.MuiButton-root {
            color: ${theme.palette.primary};
            border-color: ${theme.palette.primary};
            width: 200px;
        }
    `,
);
