import { PostsListActionTypes } from "./actionTypes";
import { PostItem } from "../types/types";

export class SetPostsAction {
    public readonly type = PostsListActionTypes.SET_POSTS;
    public posts: PostItem[];

    constructor(posts: PostItem[]) {
        this.posts = posts;
    }
}

export class SetLoadingStatusAction {
    public readonly type = PostsListActionTypes.SET_LOADING_STATUS;
    public loadingStatus: boolean;

    constructor(loadingStatus: boolean) {
        this.loadingStatus = loadingStatus;
    }
}

export class LikeItemAction {
    public readonly type = PostsListActionTypes.LIKE_ITEM;
    public itemId: number;

    constructor(itemId: number) {
        this.itemId = itemId;
    }
}

export class DislikeItemAction {
    public readonly type = PostsListActionTypes.DISLIKE_ITEM;
    public itemId: number;

    constructor(itemId: number) {
        this.itemId = itemId;
    }
}

export type PostsListAction = SetPostsAction | SetLoadingStatusAction | LikeItemAction | DislikeItemAction;

export const setLoadingStatus = (loadingStatus: boolean): SetLoadingStatusAction => {
    return ({
        type: PostsListActionTypes.SET_LOADING_STATUS,
        loadingStatus: loadingStatus,
    });
}

export const setPostsList = (postsList: PostItem[]): SetPostsAction => {
    return ({
        type: PostsListActionTypes.SET_POSTS,
        posts: postsList,
    });
}

export const likeItem = (itemId: number): LikeItemAction => {
    return ({
        type: PostsListActionTypes.LIKE_ITEM,
        itemId: itemId,
    });
}

export const dislikeItem = (itemId: number): DislikeItemAction => {
    return ({
        type: PostsListActionTypes.DISLIKE_ITEM,
        itemId: itemId,
    });
}
