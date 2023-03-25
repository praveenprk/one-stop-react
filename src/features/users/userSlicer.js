import { createSlice } from "@reduxjs/toolkit";
import { USERS } from "../../constants/constants";

const initialState = null;

export const userSlicer = createSlice({
  name: USERS,
    initialState,
    reducers: {
        addUser: (state, action) => {
            state = action.payload
            return state;
        },
        logoutUser: (state, action) => {
         return state = action.payload;
        }
    }
});

export const { addUser, logoutUser } = userSlicer.actions;
export default userSlicer.reducer