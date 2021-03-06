import { configureStore } from "@reduxjs/toolkit";
import gitReducer from "../features/checkGithub/checkGithubSlice";
import counterReducer from "../features/counter/counterSlice";
import crudReducer from "../features/crud/crudSlice";
import postsReducer from "../features/posts/postsSlice";

const storeReduxToolkit = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        github: gitReducer,
        crudReducer: crudReducer
}
})

export default storeReduxToolkit;