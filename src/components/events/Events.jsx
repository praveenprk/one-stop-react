import axios from 'axios';
import React, {useState} from 'react'
// import ApiCalendar from 'react-google-calendar-api'
import { getAllCalendars, getCalendarEvents } from '../../googleapis/calendars';
import { getUserEmail, guidGenerator } from '../../localDB/helpers';
import { useDispatch } from 'react-redux';
import { existingEvents } from '../../features/calEvents/calEventsSlicer';
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { firestore as db } from "../../googleapis/firebaseconfig";

const Events = () => {

  const [events, setEvents] = useState([]);
  const [calendars, setCalendars] = useState([]);
  const dispatchEvents = useDispatch();
  
  let calEvents = {};
  const dbRef = collection(db, "calendarEvents");

  getCalendarEvents(getUserEmail())
  .then(res => {
    res.data.items.forEach(val => {
      calEvents = {
        summary: val.summary,
        attendees: val.attendees,
        createdAt: val.created,
        hangoutLink: val.hangoutLink,
        start: val.start,
        eventStatus: val.status,
      }
      dispatchEvents(existingEvents(calEvents));
      setDoc(doc(db, "calendarEvents", guidGenerator()), calEvents)
        .then(res => console.log(`Document setDoc() written`))
        .catch(err => console.log(`error with`, err))
    });
  } ) ;
  
  return (
    <React.Fragment>
      <div>
        Events<br/>
        </div>
    </React.Fragment>
  )
}

export default Events