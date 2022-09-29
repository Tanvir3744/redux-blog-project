import { FILTERARTICLE, FILTERNAME, SEARCHBLOG } from '../ActionType/ActionType';
import initialState from '../initialState'
const blogReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case FILTERARTICLE:
            return state.filter(blog => blog.category === action.payload)

        case FILTERNAME:
            return state.filter(blog => blog.author === action.payload)

        case SEARCHBLOG:
            return state.filter(blog => blog.blogTitle.toLowerCase() === (action.payload.toLowerCase()) 
        default:
            return state;
    }
}

export default blogReducer;