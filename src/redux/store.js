import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './couter';
import todoReducer from './todo';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  }
})