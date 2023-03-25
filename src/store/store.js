import { configureStore } from '@reduxjs/toolkit'
import  todoSlicer from '../features/todo/todoSlicer'
import userSlicer from '../features/users/userSlicer';

export const store = configureStore({
  reducer: {
    todo: todoSlicer,
    user: userSlicer,
  },
});