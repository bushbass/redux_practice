import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'bob',
};

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeName } = nameSlice.actions;

export default nameSlice.reducer;
