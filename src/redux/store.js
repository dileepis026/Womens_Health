import {createStore, combineReducers, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

const appReducer = combineReducers(require('./reducers').default)
const store = createStore(appReducer, applyMiddleware(Thunk))

export default store;
