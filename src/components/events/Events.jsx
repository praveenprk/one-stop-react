import axios from 'axios';
import React, {useEffect, useState} from 'react'
// import ApiCalendar from 'react-google-calendar-api'
import { fetchCalendarEvents } from '../../googleapis/calendars';
import { getUserEmail, guidGenerator } from '../../localDB/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { existingEvents } from '../../features/calEvents/calEventsSlicer';
import { addDoc, collection, setDoc, doc, getCountFromServer } from "firebase/firestore";
import { firestore as db } from "../../googleapis/firebaseconfig";
import { store } from '../../store/store';
import EventsNav from './EventsNav';

const Events = () => {

  const [events, setEvents] = useState();
  const [isLoading, setLoader] = useState(true);
  const [calendars, setCalendars] = useState([]);
  
  const dispatchEvents = useDispatch();
  
  let calEvents = {};
  let calEventsCollect = [];
  const dbRef = collection(db, "calendarEvents");

  /* 
  setDoc(doc(db, "calendarEvents", guidGenerator()), calEvents, { merge: true })
        .then(res => console.log(`Document setDoc() written`))
        .catch(err => console.log(`error with`, err));
  */

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])

  useEffect(() => {
    if(isLoading)
      {setEvents(fetchCalendarEvents());
      console.log(`effect ran`);}
  },[])
  
  
  return (
   
 (isLoading) ? <h1>Loading</h1> : <EventsNav />
  )
}

export default Events