import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/app_reducer';

/**
 * @typedef {Object} ReduxAction
 * @prop {string} type
 * @prop {*} payload
 * 
 * @typedef {Object} ReduxState
 * @prop {import('./reducers/app_reducer').AppReducerState} app
 */

const combinedReducers = combineReducers({
    app: appReducer
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;