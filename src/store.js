import { createStore } from "redux";
import countReducer from "./services/reducers/countReducer";

const store = createStore(countReducer);

export default store;