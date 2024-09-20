import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    setUsers: (state, action) => {
      action.payload.forEach((user) => {
        state[user.id] = user;
      });
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
