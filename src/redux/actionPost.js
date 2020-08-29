import { CREATE_POST } from "./types";

export function createPost (value) {
    return {
        type: CREATE_POST,
        payload: value
    }
}