import { createSlice } from "@reduxjs/toolkit";
import { USERS } from "../../constants/constants";

const initialState = null;

export const userSlicer = createSlice({
  name: USERS,
    initialState,
    reducers: {
        addUser: (state, action) => {
            state = action.payload
            document.cookie = `user=${JSON.stringify(state)}`;
            return state;
        },
        logoutUser: (state, action) => {
        document.cookie = `user=null`;
         return state = action.payload;
        }
    }
});

export const { addUser, logoutUser } = userSlicer.actions;
export default userSlicer.reducer