import { createSlice } from "@reduxjs/toolkit";

export const github = createSlice({
    name:"github",
    initialState: {
        repo: ""
    },
    reducers:{
        repository: (state, action) => {
            state.repo = action.payload
        }
    }
})

export const {repository} = github.actions;

export default github.reducer;