import { DECREMENT, INCREMENT, RESET } from "../constants/counterContstant"

export const increaseAction = () => {
    return {
        type: INCREMENT
    }
}
export const decreaseAction = () => {
    return {
        type: DECREMENT
    }
}
export const reset = () => {
    return {
        type: RESET
    }
}