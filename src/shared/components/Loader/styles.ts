import { styled, Box as BoxMUI } from "@mui/material";

export const Box = styled(BoxMUI)<{ size?: number }>`
    &.MuiBox-root {
        height: 100vh;
        width: '100%';
        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid ${props => props.theme.palette.grey[100]};
    }
`;
