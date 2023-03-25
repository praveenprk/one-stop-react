import { createSlice } from '@reduxjs/toolkit'
import { TODO } from '../../constants/constants';
import { deleteTask } from '../../helpers/todo';

let fromLS = localStorage.getItem(TODO);
if(fromLS !== "undefined") fromLS = JSON.parse(fromLS)
else fromLS = [];

let initialState;

/* if(fromLS?.length)
  initialState = fromLS;
else */
  initialState = fromLS;


export const todoSlicer = createSlice({
  name: TODO,
  initialState,
  reducers: {
    initAppDB: (state) => {
      if(!fromLS)
        state = []
        localStorage.setItem(TODO, JSON.stringify(state))
      return state;
    },
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
    tickOffTodoList: (state, action) => {
      state = state.forEach(task => {
        if(task.id == action.payload)
          task.completed === false ? task.completed = true : task.completed = false;
          state = [...state];
          localStorage.setItem(TODO, JSON.stringify(state));
      });
      return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { initAppDB, addAllTask, removeTask, removeTodaysTodos, tickOffTodoList } = todoSlicer.actions

export default todoSlicer.reducer