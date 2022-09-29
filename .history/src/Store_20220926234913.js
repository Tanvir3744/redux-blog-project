import { createStore } from 'redux';
import blogReducer from './Redux/Reducer/Reducer.js'
import {composeWithDevTools} from 'redux-devtools-extension'
// import rootReducer from './Redux/rootReducer';
//creating store
const store = createStore(blogReducer, composeWithDevTools())

export default store;