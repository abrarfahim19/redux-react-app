import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "../constants/toDoConstant";

const initialState = {
    isLoading: false,
    todos: [],
    error: null
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                isLoading: true,
            }
        case GET_TODO_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload
            }
        case GET_TODO_FAILED:
            return {
                isLoading: false,
                todos: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default todosReducer;