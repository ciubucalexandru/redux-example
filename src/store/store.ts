import { createStore, combineReducers } from 'redux';
import { PostsListReducer, PostsListState } from '../reducers/PostsListReducer';

const rootReducer = combineReducers({
    postsList: PostsListReducer,
});

export const store = createStore(
    rootReducer,
);

export interface AppState {
    postsList: PostsListState;
}
