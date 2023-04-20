import axios from 'axios';
import React, {useState} from 'react'
// import ApiCalendar from 'react-google-calendar-api'
import { listAllCalendars } from '../../googleapis/calendars';


const Events = () => {

  const [events, setEvents] = useState([]);
  const [calendars, setCalendars] = useState([]);

  listAllCalendars();

 /*  const config = {
    "clientId": "519228254926-lbi8mn0gvgejatf5jqv5eup3rkv2l0jp.apps.googleusercontent.com",
    "apiKey": "AIzaSyDrGQfp0koIAyVwBWn6Saxso6-y-Wc8hik",
    "scope": "https://www.googleapis.com/auth/calendar",
    "discoveryDocs": [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
  }
  const apiCalendar = new ApiCalendar(config, localStorage.getItem("access_token"));
  console.log(`api calendar`, apiCalendar);
  // apiCalendar */
  


  return (
    <React.Fragment>
      <div>
        Events<br/>
        </div>
    </React.Fragment>
  )
}

export default Events