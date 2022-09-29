import { FILTERARTICLE } from '../ActionType/ActionType';
import initialState from '../initialState'
const blogReducer = (state=initialState, action) => {
    switch (action.type) {
        case FILTERARTICLE:
            return state.filter(blog => blog.category === action.payload)
    
        default:
            return state;
    }
}

export default blogReducer;