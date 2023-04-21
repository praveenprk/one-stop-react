import { createSlice } from "@reduxjs/toolkit";
import { USERS } from "../../constants/constants";
import { getCookie } from "../../helpers/users";

const initialState = null;

export const userSlicer = createSlice({
  name: USERS,
    initialState,
    reducers: {
        addUser: (state, action) => {
            state = action.payload
            localStorage.setItem("userInfo", state);
            // console.log(`user info`, localStorage.getItem("userInfo"));
            return state;
        },
        logoutUser: (state, action) => {
            localStorage.setItem("user", null);
            return state = action.payload;
        },
        checkAuth: (state, action) => {
            console.log(`cookies`, document.cookie);
            console.log(`cookies type`, typeof document.cookie);
        }
    }
});

export const { addUser, logoutUser } = userSlicer.actions;
export default userSlicer.reducer