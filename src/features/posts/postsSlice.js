import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POSTURL = "https://jsonplaceholder.typicode.com/posts"
export const fetchPosts = createAsyncThunk("posts/fetchPosts",
    async() => {
        const res = await axios.get(POSTURL);
        return res.data;
})

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        posts: [],
        error: null
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.posts = action.payload
        });
        builder.addCase(fetchPosts.rejected, (state, action)=>{
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;
        });
    }
})

export default postsSlice.reducer