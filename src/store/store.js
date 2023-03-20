import { configureStore } from '@reduxjs/toolkit'
import  todoSlicer from '../features/todo/todoSlicer'

export const store = configureStore({
  reducer: {
    todo: todoSlicer
  },
});