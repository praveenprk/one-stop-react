import React, {useState} from 'react'
import ApiCalendar from 'react-google-calendar-api'


const Events = () => {

  const [events, setEvents] = useState([]);
  const [calendars, setCalendars] = useState([]);

  const config = {
    "clientId": "519228254926-lbi8mn0gvgejatf5jqv5eup3rkv2l0jp.apps.googleusercontent.com",
    "apiKey": "AIzaSyDrGQfp0koIAyVwBWn6Saxso6-y-Wc8hik",
    "scope": "https://www.googleapis.com/auth/calendar",
    "discoveryDocs": [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
  }
  
  const apiCalendar = new ApiCalendar(config, localStorage.getItem("access_token"));
  console.log(`api calendar`, apiCalendar);
  // apiCalendar
  
  const handleItemClick = (event, name) => {
    if (name === 'sign-in') {
      console.log(`after sign in`,apiCalendar);
      apiCalendar.handleAuthClick()
    } else if (name === 'sign-out') {
      apiCalendar.handleSignoutClick();
    }
  };


  return (
    <React.Fragment>
      <div>
        Events<br/>
        <button onClick={(e) => handleItemClick(e, "sign-in")}>sign-in</button>
        <button onClick={(e) => handleItemClick(e, "sign-out")}>sign out</button>
        <button
          onClick={(e) => {
            apiCalendar.listCalendars().then(({ result }) => {
              console.log(result.items);
              setCalendars(result.items);
            });
            console.log(`after list`, apiCalendar);
          }}
        >
          List calendars
        </button>
        <h4>Calendars</h4>
          {calendars.length === 0 && <p>No calendars to show</p>}
          {calendars.map((calendar) => (
            <p key={calendar.id}>{JSON.stringify(calendar)}</p>
          ))}
        </div>
    </React.Fragment>
  )
}

export default Events