import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import countReducer from "./services/reducers/countReducer";
import todosReducer from "./services/reducers/todosReducer";

// const store = createStore(countReducer);
const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;