export const STORE_COMMENT = 'STORE_COMMENT';
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