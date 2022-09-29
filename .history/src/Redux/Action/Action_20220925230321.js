import { FILTERARTICLE,  FILTERNAME } from "../ActionType/ActionType"

//defining action
export const filterArticle = (article) => {
    return {
        type: FILTERARTICLE,
        payload: article,
    }
}

export const filterAuthorName = (author_name) => {
    return {
        type: FILTERNAME,
        payload: author_name,
    }
}

 export const search_blog = () => {
    return {
        type: SEARCHBLOG,
    }
} 