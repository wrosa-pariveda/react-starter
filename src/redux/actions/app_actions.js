export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU';
export function toggleSideMenuActionCreator(open) {
    return {
        type: TOGGLE_SIDE_MENU,
        payload: open
    };
}