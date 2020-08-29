import { CREATE_POST } from "./types";

const initialStaet = {
    posts: [],
    fetchedPosts: []
}

export const postReducer = (state = initialStaet, action) => {
    switch (action.type) {
        case CREATE_POST:
            
            // return {...state, posts: [...state.posts, action.payload]}
            return {...state, posts: state.posts.concat(action.payload)}
    
        default:
            return state;
    }
}