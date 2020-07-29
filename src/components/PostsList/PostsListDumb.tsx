import React from 'react';
import { PostItem } from '../../types/types';
import { Container, Card, makeStyles, Typography, CardContent, CardActions, Checkbox } from '@material-ui/core';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';
import PostListItem from '../PostListItem/PostListItemSmart';

type Props = {
    posts: PostItem[],
}

const PostsListDumb: React.FC<Props> = (props: Props) => {


    return (
        <Container maxWidth="lg">
            <Typography variant="h1">
                Posts List
            </Typography>
            <br /> <br />
            {props.posts.map((post) => (
                <PostListItem key={post.id} itemId={post.id} title={post.title} />
            ))}
        </Container>
    );
}

export default PostsListDumb;
