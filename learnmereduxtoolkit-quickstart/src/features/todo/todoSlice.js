import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: { value: ['first todo'] },
  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
