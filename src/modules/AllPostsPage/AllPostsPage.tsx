import { useEffect, useState } from "react";
import { usePostsStore } from "src/app/store";
import { Box } from "./styles";
import { Input } from "src/shared/ui-kit";
import { List, ListItem } from "src/shared/components";

export const AllPostsPage = () => {
    const [searchValue, setSearchValue] = useState("");
    const { posts, getAllPosts } = usePostsStore();

    const filterPosts = (value: string) => {
        setSearchValue(value);
    };

    useEffect(() => {
        getAllPosts();
    }, [getAllPosts]);

    return (
        <Box>
            <Input onChange={filterPosts} placeholder="Search" />
            <List title="Posts">
                {posts
                    ?.filter(post =>
                        post.title
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()),
                    )
                    .map(item => (
                        <ListItem
                            id={item.id}
                            title={item.title}
                            key={item.id}
                        />
                    ))}
            </List>
        </Box>
    );
};
