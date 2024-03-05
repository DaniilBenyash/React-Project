import {
    ListItem as ListItemMUI,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { Link } from "./styles";
import { useLocation } from "react-router-dom";

type ListItemProps = {
    id: string;
    title: string;
};

export const ListItem = ({ id, title }: ListItemProps) => {
    const { pathname } = useLocation();
    return (
        <Link href={pathname + "/" + id}>
            <ListItemMUI>
                <ListItemButton>
                    <ListItemText primary={title} />
                </ListItemButton>
            </ListItemMUI>
        </Link>
    );
};
