import axios from "axios";
import { store } from '../store/store';
import { getUserEmail, getAccessToken } from "../localDB/helpers";
import { existingEvents, nullifyEvents } from "../features/calEvents/calEventsSlicer";

let userEmail = getUserEmail();
let access_token = getAccessToken();

export const getAllCalendars = async () => {
    axios.get(`https://www.googleapis.com/calendar/v3/users/me/calendarList/${userEmail}`,
    {
     headers: {
      Authorization: `Bearer ${access_token}`,
    }
  });
}

export const callCalendarAPI = (calendarId) => {
   return axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: 'application/json',
        }
      });
}

export const deleteEventFromCalendarAPI = (eventId) => {
  return axios.delete(`https://www.googleapis.com/calendar/v3/calendars/${userEmail}/events/${eventId}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })
}
 
export const fetchCalendarEvents = () => {
  let calEvents, noAtt = [{email:'no attendee'}], noLink='No hangout link';

  callCalendarAPI(userEmail)
  .then(res => {
        console.log(`res`, res);
    store.dispatch(nullifyEvents());
    res.data.items.forEach(val => {
      // let count = val.reduce((a, obj) => a + Object.keys(obj).length, 0);
      // console.log(`fesgdf count`, count);
      // if(val.attendees.length > 2) {
      calEvents = {
        eventId: val.id,
        summary: val.summary,
        attendees: (val.attendees === undefined) ? noAtt : val.attendees,
        createdAt: val.created,
        hangoutLink: (val.hangoutLink === undefined) ? noLink : val.hangoutLink,
        start: val.start,
        eventStatus: val.status,
      }
    // }
      store.dispatch(existingEvents(calEvents));
      // console.log(`res 1122`, calEventsCollection);
    })
  })
  // return store.getState().calEvents
}


