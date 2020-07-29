import React from 'react';
import { read } from 'fs';
import { AppState } from '../../store/store';
import { Dispatch } from 'redux';
import { likeItem, dislikeItem } from '../../actions/PostsListReducerActions';
import { connect } from 'react-redux';
import PostListItemDumb from './PostListItemDumb';

type Props = {
    title: string;
    itemId: number,
    isLiked: boolean,
    likeItem: (itemId: number) => void,
    dislikeItem: (itemId: number) => void,
}

const PostListItemSmart: React.FC<Props> = (props: Props) => {

    return (
        <PostListItemDumb {...props} />
    );
}

const mapStateToProps = (state: AppState, ownProps: { itemId: number, title: string }) => ({
    title: ownProps.title,
    itemId: ownProps.itemId,
    isLiked: state.postsList.likedItems.includes(ownProps.itemId),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    likeItem: (itemId: number) => dispatch(likeItem(itemId)),
    dislikeItem: (itemId: number) => dispatch(dislikeItem(itemId)),
});

const PostListItem = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostListItemSmart);

export default PostListItem;
