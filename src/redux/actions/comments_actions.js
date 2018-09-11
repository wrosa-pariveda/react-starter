export const STORE_COMMENT = 'STORE_COMMENT';
/**
 * @typedef {{postId:number; id:number; name:string; email:string; body:string;}} Comment
 * 
 * @typedef {import('../store').ReduxAction} ReduxAction
 * @param {Comment} comment 
 * @returns {ReduxAction}
 */
export function storeCommentActionCreator(comment) {
    return {
        type: STORE_COMMENT,
        payload: comment
    };
}

export function fetchCommentActionCreator() {
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