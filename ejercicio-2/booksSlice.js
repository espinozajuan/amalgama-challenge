import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {},
  reducers: {
    setBooks: (state, action) => {
      action.payload.forEach((book) => {
        state[book.id] = book;
      });
    },
  },
});

export const { setBooks } = booksSlice.actions;
export default booksSlice.reducer;
