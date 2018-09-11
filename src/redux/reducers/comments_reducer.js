import { STORE_COMMENT } from '../actions/comments_actions';

/**
 * @typedef {Object} CommentsReducerState
 * @prop {import('../actions/app_actions').Comment[]} list
 * @prop {number} lastId
 * 
 * @typedef {import('../store').ReduxAction} ReduxAction
 */

/**
 * @type {CommentsReducerState}
 */
const initialState = {
    list: [],
    lastId: 0
};

/**
 * @param {CommentsReducerState} state 
 * @param {ReduxAction} action
 * @returns {CommentsReducerState}
 */
export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case STORE_COMMENT:
            const id = action.payload.id;
            const newList = state.list.slice();
            if (state.list.indexOf(id - 1) === -1) {
                newList.push(action.payload);
            } else {
                newList[id - 1] = action.comment;
            }
            return {
                ...state,
                list: newList,
                lastId: id
            };
        default:
            return state;
    }
}