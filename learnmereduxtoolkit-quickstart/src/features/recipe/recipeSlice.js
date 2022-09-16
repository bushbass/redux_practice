import { createSlice } from '@reduxjs/toolkit';

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    value: [
      {
        name: 'recipe one',
        description: 'here is where you would put the recipe instructions',
      },
    ],
  },
  reducers: {
    addRecipe: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
