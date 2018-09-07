import { TOGGLE_SIDE_MENU } from '../actions/app_actions';

/**
 * @typedef {Object} AppReducerState
 * @prop {boolean} sideMenuOpen
 * 
 * @typedef {import('../store').ReduxAction} ReduxAction
 */

/**
 * @type {AppReducerState}
 */
const initialState = {
    sideMenuOpen: false,
};

/**
 * @param {AppReducerState} state 
 * @param {ReduxAction} action
 * @returns {AppReducerState}
 */
export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SIDE_MENU:
            return {
                ...state,
                sideMenuOpen: action.payload
            };
        default:
            return state;
    }
}