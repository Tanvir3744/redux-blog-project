import { SEARCHFEATURE } from "./ActionType"

export const search_blogs = (search_result) => {
    return {
        type: SEARCHFEATURE,
        paylaod: search_result
    }
}