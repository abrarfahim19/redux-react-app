import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const crudInit = {
  books: [
    { id: uuidv4(), name: "Self Help", author: "BugiChugi" },
    { id: uuidv4(), name: "No Self Help", author: "ChugiBugi" },
  ],
};

const crudSlice = createSlice({
  name: "crud",
  initialState: crudInit,
  reducers: {
    showBooks: (state) => {
      return state;
    },
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    editBooks: (state, action) => {
      const { id, name, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].name = name;
        isBookExist[0].author = author;
      }
    },
    deleteBooks: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBooks, editBooks, deleteBooks } =
  crudSlice.actions;

export default crudSlice.reducer;
