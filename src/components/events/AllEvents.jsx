import React from 'react'
import { store } from '../../store/store';

const AllEvents = () => {
const eventsInState = store.getState().calEvents;
  return (
    <React.Fragment>
      <legend>All Events</legend>
      <div className='container d-flex flex-column'>
        <strong>
          {eventsInState?.map((val, i) => {
            return (
              <div key={i} className="card-body shadow-lg p-3 mb-5 bg-white rounded">
                <h5 className="card-title">{val?.summary}</h5>
                <small className="card-text">Starts @ 🕗:</small>
                <small className="card-text">Events status:</small>
                <small className="card-text">Created 📅 </small>
                <small className="card-text">Hangout 🔗</small>
                <a href="#">Show All Attendees</a>
              </div>
            );
          })}
        </strong>
      </div>
    </React.Fragment>
  )
}

export default AllEvents