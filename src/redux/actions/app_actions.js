export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU';
/**
 * @typedef {import('../store').ReduxAction} ReduxAction
 * @param {boolean} open 
 * @returns {ReduxAction}
 */
export function toggleSideMenuActionCreator(open) {
    return {
        type: TOGGLE_SIDE_MENU,
        payload: open
    };
}

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