import { styled, Box as BoxMUI } from "@mui/material";

export const Box = styled(BoxMUI)`
    &.MuiBox-root {
        padding: 10px 50px 50px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
`;
