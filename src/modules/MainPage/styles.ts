import { styled, Box as BoxMUI, Link as LinkMUI } from "@mui/material";

export const Link = styled(LinkMUI)`
    color: black;
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
`;

export const Box = styled(BoxMUI)`
    &.MuiBox-root {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 100px;
        max-width: 100%;
        height: 150px;
        background-color: aliceblue;
        border: 1px solid black;
        font-size: 60px;

        &:hover {
            background-color: #d0e1ef;
        }
    }
`;
