import { CREATE_POST, FETCHED_POST, SHOW_LOADER, HIDE_LOADER } from "./types";

export function createPost (value) {
    return {
        type: CREATE_POST,
        payload: value
    }
}

export function fetchPosts (value) {
    return async dispatch => {
        dispatch({type: SHOW_LOADER})
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await responce.json()
        setTimeout(_ => {
            dispatch({type: FETCHED_POST, payload: json })
            dispatch({type: HIDE_LOADER })
        }, 1000)
    }
}