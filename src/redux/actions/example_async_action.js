import { storeCommentActionCreator } from './app_actions';

export const EXAMPLE_ASYNC_TYPE = 'EXAMPLE_ASYNC';
export default function asyncStoreCommentActionCreator() {
    return (dispatch, getState, api) => {
        const reduxState = getState();
        const nextComment = reduxState.comments.lastId + 1;
        return fetch(`${api}/comments/${nextComment}`)
            .then(response => response.json())
            .then(comment => {
                dispatch(storeCommentActionCreator(comment));
            })
    };
}