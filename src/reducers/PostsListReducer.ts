import { PostItem } from "../types/types";
import { PostsListAction } from "../actions/PostsListReducerActions";
import { PostsListActionTypes } from "../actions/actionTypes";

export interface PostsListState {
    isLoading: boolean,
    posts: PostItem[],
    likedItems: number[];
}

const initialState: PostsListState = {
    isLoading: true,
    posts: [],
    likedItems: [],
}

export const PostsListReducer = (
    state: PostsListState = initialState,
    action: PostsListAction,
): PostsListState => {
    switch (action.type) {
        case PostsListActionTypes.SET_POSTS: {
            return {
                ...state,
                posts: action.posts,
            }
        }
        case PostsListActionTypes.SET_LOADING_STATUS: {
            return {
                ...state,
                isLoading: action.loadingStatus,
            }
        }
        case PostsListActionTypes.LIKE_ITEM: {
            return {
                ...state,
                likedItems: state.likedItems.includes(action.itemId) ? state.likedItems : [...state.likedItems, action.itemId],
            }
        }
        case PostsListActionTypes.DISLIKE_ITEM: {
            return {
                ...state,
                likedItems: state.likedItems.filter(item => item !== action.itemId),
            }
        }
        default:
            return state;
    }
}
