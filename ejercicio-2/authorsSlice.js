import { createSlice } from '@reduxjs/toolkit';

const authorsSlice = createSlice({
  name: 'authors',
  initialState: {},
  reducers: {
    setAuthors: (state, action) => {
      action.payload.forEach((author) => {
        state[author.id] = author;
      });
    },
  },
});

export const { setAuthors } = authorsSlice.actions;
export default authorsSlice.reducer;
