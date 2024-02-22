import {
    ListItem as ListItemMUI,
    ListItemButton,
    ListItemText,
    Link,
} from "@mui/material";

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
