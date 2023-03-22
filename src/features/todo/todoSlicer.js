import { createSlice } from '@reduxjs/toolkit'
import { TODO } from '../../constants/constants';
import { deleteTask } from '../../helpers/todo';

let fromLS = localStorage.getItem("todo");
fromLS = JSON.parse(fromLS);

let initialState;

if(fromLS?.length)
  initialState = fromLS;
else
  initialState = [];


export const todoSlicer = createSlice({
  name: TODO,
  initialState,
  reducers: {
    addAllTask: (state, action) => {
      state.push(action.payload);
      if(state.length)
        localStorage.setItem(TODO, JSON.stringify(state));
    },
    removeTask: (state, action) => {
      state = state.filter(task => task.id !== action.payload);
      deleteTask(action.payload);
      return state;
    },
    removeTodaysTodos: (state) => {
      let today = new Date().toLocaleDateString();
      state = state.filter(task => task.date !== today);
      localStorage.setItem(TODO, JSON.stringify(state));
    return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAllTask, removeTask, removeTodaysTodos } = todoSlicer.actions

export default todoSlicer.reducer