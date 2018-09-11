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