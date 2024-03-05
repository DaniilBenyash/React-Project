import { styled, TextField as TextFieldMUI } from "@mui/material";

export const TextField = styled(TextFieldMUI)(
    ({ theme }) => `
    &.MuiTextField-root {

        & .MuiFormLabel-root {
            color: ${theme.palette.primary};
            border-color: ${theme.palette.primary};
        }

        & div {
            
            & .MuiOutlinedInput-notchedOutline {
                color: ${theme.palette.primary};
                border-color: ${theme.palette.primary};
            }
        }
    }
`,
);
