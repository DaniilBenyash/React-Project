import { Button as ButtonMUI } from "./styles";
import { FC } from "react";

type ButtonProps = {
    onClick: () => void;
    text: string;
};

export const Button: FC<ButtonProps> = props => {
    return (
        <ButtonMUI variant="outlined" onClick={props.onClick}>
            {props.text}
        </ButtonMUI>
    );
};
