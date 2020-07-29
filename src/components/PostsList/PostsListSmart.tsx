import React, { useEffect } from 'react';
import { AppState } from '../../store/store';
import { Dispatch } from 'redux';
import { setLoadingStatus, setPostsList } from '../../actions/PostsListReducerActions';
import { PostItem } from '../../types/types';
import { connect } from 'react-redux';
import { CircularProgress, Container } from '@material-ui/core';
import PostsListDumb from './PostsListDumb';

type Props = {
    posts: PostItem[],
    isLoading: boolean,
    setLoadingStatus: (loadingStatus: boolean) => void,
    setPosts: (posts: PostItem[]) => void,
}

const PostsListSmart: React.FC<Props> = (props: Props) => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                props.setPosts(data);
                setTimeout(() => {
                    props.setLoadingStatus(false);
                }, 500);

            });
    }, []);

    if (props.isLoading) {
        return (
            <Container maxWidth="sm">
                <CircularProgress />
            </Container>
        );
    }

    return (
        <PostsListDumb posts={props.posts} />
    );
}

const mapStateToProps = (state: AppState) => ({
    posts: state.postsList.posts,
    isLoading: state.postsList.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setLoadingStatus: (loadingStatus: boolean) => dispatch(setLoadingStatus(loadingStatus)),
    setPosts: (posts: PostItem[]) => dispatch(setPostsList(posts)),
});

const PostsList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostsListSmart);

export default PostsList;
