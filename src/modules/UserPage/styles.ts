import { styled, Box as BoxMUI } from "@mui/material";

export const Box = styled(BoxMUI)`
    &.MuiBox-root {
        margin: 50px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`;
