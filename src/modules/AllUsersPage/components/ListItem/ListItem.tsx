import {
    ListItem as ListItemMUI,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { Link } from "./styles";
type ListItemProps = {
    id: string;
    name: string;
};

export const ListItem = ({ id, name }: ListItemProps) => {
    return (
        <Link href={`/users/${id}`} >
            <ListItemMUI>
                <ListItemButton>
                    <ListItemText primary={name} />
                </ListItemButton>
            </ListItemMUI>
        </Link>
    );
};
