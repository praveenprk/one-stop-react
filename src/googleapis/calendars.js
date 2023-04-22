import axios from "axios";
import { getUserEmail, getAccessToken } from "../localDB/helpers";

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

export const getCalendarEvents = (calendarId) => {
   return axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        }
      });
}
