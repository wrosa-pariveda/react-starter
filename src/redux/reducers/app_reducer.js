import PropTypes from 'prop-types';
import { TOGGLE_SIDE_MENU } from '../actions/app_actions';

const initialState = {
    sideMenuOpen: false,
};

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

export const AppReducerStatePropType = PropTypes.shape({
    sideMenuOpen: PropTypes.bool.isRequired
});