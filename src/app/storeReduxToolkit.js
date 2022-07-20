import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const storeReduxToolkit = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export default storeReduxToolkit;