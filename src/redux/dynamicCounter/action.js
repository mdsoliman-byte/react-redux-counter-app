import { D_DECREMENT, D_INCREMENT } from "./actionTypes"

export const d_increment = (value) => {
    return {
        type: D_INCREMENT,
        payload: value

    }
}
export const d_decrement = (value) => {
    return {
        type: D_DECREMENT,
        payload: value

    }
}