import { EXAMPLE_TYPE } from '../actions/example_action';

const initialState = {
    text: '',
    time: null
};

export default function exampleReducer(state = initialState, action) {
    switch (action.type) {
        case EXAMPLE_TYPE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}