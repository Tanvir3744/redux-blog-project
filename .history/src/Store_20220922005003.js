import { createStore, compose } from 'redux';
import blogReducer from './Redux/Reducer/Reducer';
import {composeWithDevTools} from 'redux-devtools-extension'
//creating store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(blogReducer, composeEnhancers())

export default store;