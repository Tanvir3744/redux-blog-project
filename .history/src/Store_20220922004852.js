import { createStore, compose } from 'redux';
import blogReducer from './Redux/Reducer/Reducer';
import {composeWithDevTools} from 'redux-devtools-extension'
//creating store
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(blogReducer, composeEnhancer)

export default store;