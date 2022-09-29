import { createStore } from 'redux';
import blogReducer from './Redux/Reducer/Reducer.js'
import {composeWithDevTools} from 'redux-devtools-extension'
// import rootReducer from './Redux/rootReducer';
//creating store
const store = createStore(, composeWithDevTools())

export default store;