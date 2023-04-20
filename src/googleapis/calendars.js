import axios from "axios";
import { getUserEmail } from "../localDB/helpers";

export const listAllCalendars = async () => {
    const res = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${getUserEmail()}/events`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Cross-Origin-Opener-Policy" : "Cross-Origin-Opener-Policy"
    }
  }).then(res => console.log(res.data)).catch(err => console.error(err))
}

export const listCalendarEvents = async (calendarId) => {
    const events = await axios.get("https://www.googleapis.com/calendar/v3/users/me/calendarList", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        }
      }).then(res => console.log(res.data)).catch(err => console.error(err))
}