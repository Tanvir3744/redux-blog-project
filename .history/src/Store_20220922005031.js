import { createStore} from 'redux';
import blogReducer from './Redux/Reducer/Reducer';
import {composeWithDevTools} from 'redux-devtools-extension'
//creating store
const store = createStore(blogReducer, composeWithDevTools())

export default store;