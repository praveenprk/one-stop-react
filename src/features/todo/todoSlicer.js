import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const todoSlicer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addAllTask: (state, action) => {
      state.push(action.payload);
      if(state.length)
        localStorage.setItem("todo", JSON.stringify(state));
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAllTask, decrement, incrementByAmount } = todoSlicer.actions

export default todoSlicer.reducer