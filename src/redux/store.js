import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import exampleReducer from './reducers/example_reducer';

const combinedReducers = combineReducers({
    example: exampleReducer
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;