import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import nameReducer from '../features/name/nameSlice';
import messageListReducer from '../features/messageList/messageListSlice';
import todoReducer from '../features/todo/todoSlice';
import recipeReducer from '../features/recipe/recipeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
    messageList: messageListReducer,
    todos: todoReducer,
    recipes: recipeReducer,
  },
});
