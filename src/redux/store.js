import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/app_reducer';

const combinedReducers = combineReducers({
    app: appReducer
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;