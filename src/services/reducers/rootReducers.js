import { combineReducers } from "redux";
import countReducer from "./countReducer";
import todosReducer from "./todosReducer";

const rootReducers = combineReducers({
    countR:countReducer,
    todoR:todosReducer
})

export default rootReducers;