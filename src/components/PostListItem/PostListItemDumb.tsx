import React from 'react'
import { Card, CardContent, Typography, CardActions, Checkbox } from '@material-ui/core';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';
import './postListItem.css';

type Props = {
    title: string;
    itemId: number,
    isLiked: boolean,
    likeItem: (itemId: number) => void,
    dislikeItem: (itemId: number) => void,
}

const PostListItemDumb: React.FC<Props> = ({ title, itemId, isLiked, likeItem, dislikeItem }) => {

    return (
        <Card className="post-list-item-root" variant="outlined">
            <CardContent>
                <Typography className="post-list-item-title" color="textSecondary" gutterBottom>
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Checkbox icon={<Favorite />} checkedIcon={<FavoriteBorderOutlined />} checked={isLiked} onClick={() => {
                    isLiked ? dislikeItem(itemId) : likeItem(itemId)
                }} />
            </CardActions>
        </Card>
    );
}

export default PostListItemDumb;
