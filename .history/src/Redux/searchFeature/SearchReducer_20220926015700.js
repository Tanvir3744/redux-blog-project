import { SEARCHFEATURE } from "./ActionType";
import initialState from "./initialState";

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCHFEATURE:
            return {
                blogs: action.payload,
                searchedBlogs: action.payload 
            }
    
        default:
            return state;
    }
}

export default searchReducer;