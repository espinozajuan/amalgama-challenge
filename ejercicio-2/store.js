import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import usersReducer from './usersSlice';
import authorsReducer from './authorsSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    users: usersReducer,
    authors: authorsReducer,
  },
});

export default store;
