import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";

const storeReduxToolkit = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer

}
})

export default storeReduxToolkit;