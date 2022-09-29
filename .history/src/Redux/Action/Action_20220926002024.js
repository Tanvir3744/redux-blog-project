import { FILTERARTICLE,  FILTERNAME, SEARCHBLOG } from "../ActionType/ActionType"

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

export const search_blog = (searchTerm) => {
    return {
        type: SEARCHBLOG,
        payload: searchTerm
    }
}  