import { createSlice } from '@reduxjs/toolkit';

export const userEmailSlice = createSlice({
  name: 'email',
  initialState: '',
  reducers: {
    setEmail: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setEmail } = userEmailSlice.actions;

export default userEmailSlice.reducer;
