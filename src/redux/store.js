import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/app_reducer';
import commentsReducer from './reducers/comments_reducer';

/**
 * @typedef {Object} ReduxAction
 * @prop {string} type
 * @prop {*} payload
 * 
 * @typedef {Object} ReduxState
 * @prop {import('./reducers/app_reducer').AppReducerState} app
 * @prop {import('./reducers/comments_reducer').CommentsReducerState} comments
 */

const api = 'https://jsonplaceholder.typicode.com';

const combinedReducers = combineReducers({
    app: appReducer,
    comments: commentsReducer
});

const store = createStore(combinedReducers, applyMiddleware(thunk.withExtraArgument(api)));

export default store;