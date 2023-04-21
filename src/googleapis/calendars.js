import axios from "axios";
import { getUserEmail } from "../localDB/helpers";

export const listAllCalendars = async () => {
    axios.get(`https://www.googleapis.com/calendar/v3/users/me/calendarList/${getUserEmail()}`,
    {
     headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")} `,
    }
  }).then(res => console.log(res.data)).catch(err => console.error(err))
}

export const listCalendarEvents = async (calendarId) => {
    const events = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${getUserEmail()}/events`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        }
      }).then(res => console.log(`events`,res.data)).catch(err => console.error(`events err`,err))
}



/* fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
   console.log(error)
  })   */
