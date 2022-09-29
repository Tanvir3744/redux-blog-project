import { createStore} from 'redux';
import blogReducer from './Redux/Reducer/Reducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './Redux/rootReducer';
//creating store
const store = createStore(rootReducer, composeWithDevTools())

export default store;