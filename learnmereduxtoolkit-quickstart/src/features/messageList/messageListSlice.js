import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: ['first message'] };

export const messageListSlice = createSlice({
  name: 'messageList',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage } = messageListSlice.actions;

export default messageListSlice.reducer;
