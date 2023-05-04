import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { firestore as db } from "../../googleapis/firebaseconfig";
import { deleteEventFromCalendarAPI } from "../../googleapis/calendars";

const initialState = [];

export const calEventsSlicer = createSlice({
    name: "calendarEvents",
    initialState,
    reducers: {
        existingEvents: (state = initialState, action) => {
            state.push(action.payload);
            /* state.forEach(val => {
                console.log(`val`, val);
            }); */
            // state.forEach(val => {
                // console.log(`type`, val.type)
                // console.log(`val here`, val)
                /* addDoc(collection(db, "allCalendarEvents"), val)
                    .then(res => console.log(`Document written with ID:`, res))
                    .catch(err => console.log(`error with`, err))
                    console.log("Document written with ID: ", docRef); */
            // });
        },
        nullifyEvents: (state) => {
            state = initialState
            return state;
        },
        deleteEvent: (state, action) => {
            return state.filter(res => res.eventId != action.payload)
            
            /* console.log(`objectddd`, state);
            console.log(`action`, action); */
        }
    }
});

export const { existingEvents, nullifyEvents, deleteEvent } = calEventsSlicer.actions;
export default calEventsSlicer.reducer;