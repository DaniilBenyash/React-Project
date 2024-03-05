import React, { FC } from "react";
import {
    createTheme,
    Theme,
    ThemeProvider as ThemeProviderMUI,
} from "@mui/material/styles";

type ThemeProviderProps = {
    children: React.ReactNode;
    theme?: Theme;
};

const theme = createTheme({
    palette: {
        primary: {
            main: "#c32b3b",
        },
    },
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    return <ThemeProviderMUI theme={theme}>{children}</ThemeProviderMUI>;
};
