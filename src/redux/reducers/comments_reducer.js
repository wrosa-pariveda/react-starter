import PropTypes from 'prop-types';
import { STORE_COMMENT } from '../actions/comments_actions';

const initialState = {
    list: [],
    lastId: 0
};

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

export const CommentsReducerStatePropType = PropTypes.shape({
    lastId: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        postId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string,
        body: PropTypes.string
    }))
});