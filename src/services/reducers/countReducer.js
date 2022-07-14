import { DECREMENT, INCREMENT, RESET } from "../constants/counterContstant";

const initialCount = {
    count: 0
}

const countReducer = (state = initialCount, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        case RESET:
            return {
                count: 0
            };
        default:
            return state;
    }
}

export default countReducer;