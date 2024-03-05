import { TextField } from "./styles";
import { ChangeEvent, FC } from "react";

type InputProps = {
    onChange: (value: string) => void;
    placeholder: string;
};

export const Input: FC<InputProps> = props => {
    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const value = event.target.value;
        props.onChange(value)
    };
    return (
        <TextField
            id="outlined-basic"
            label={props.placeholder}
            variant="outlined"
            onChange={handleChange}
        />
    );
};
