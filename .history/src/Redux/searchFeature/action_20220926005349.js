import { SEARCHFEATURE } from "./ActionType"

export const search_blogs = (searchValue) => {
    return {
        type: SEARCHFEATURE,
        paylaod: searchValue
    }
}