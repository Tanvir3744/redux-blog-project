import { FILTERARTICLE, FITLERIMAGE, FILTERNAME } from "../ActionType/ActionType"

//defining action
export const filterArticle = (article) => {
    return {
        type: FILTERARTICLE,
        payload: article,
    }
}

export const filterAuthorName = (author_name) => {
    return {
        type: FITLERNAME,
        payload: author_name,
    }
}

export const filterImage = (author_image)=>{
    return {
        type: FITLERIMAGE,
        payload: author_image,
    }
}