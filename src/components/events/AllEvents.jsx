import React, {useState} from 'react'
import { store } from '../../store/store';
import ShowAttendees from './ShowAttendees';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteEventFromCalendarAPI } from '../../googleapis/calendars';
import { deleteEvent } from '../../features/calEvents/calEventsSlicer';

const AllEvents = () => {

const eventsInState = store.getState().calEvents;
// const [basicModal, setBasicModal] = useState(false);
const [modalShow, setModalShow] = useState(false);
const [eventInfo, setEventInfo] = useState([]);
const [deleted, setDeleted] = useState(false);

function MyVerticallyCenteredModal(props) {
  const { eventInfo } = props
  console.log(`props:`, eventInfo)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {eventInfo.summary}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <hr></hr>
      <div className='d-flex flex-column gap-2'>
        {
        eventInfo?.attendees?.map((names, i) => 
          <ul key={i} className='d-flex flex-row justify-content-around'>
            <li class="badge bg-secondary">{`${names.email}`}</li>
            <li class="badge bg-secondary">{`${names?.responseStatus}`}</li>
          </ul>
        )
          }
      </div>
      <hr></hr>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

    return (
    <React.Fragment>
      <legend>All Events</legend>
      {
        console.log(`events:`, eventsInState)
      }
      <div className='container d-flex flex-column'>
        <strong>
          {eventsInState?.map((val, i) => {
            // console.log(`delete`, val);
            return (
              <div key={i} className="d-flex flex-column card-body shadow-lg p-3 mb-5 bg-white rounded">
                <h5 className="card-title">{val?.summary}</h5><span onClick={
                  () => { 
                    store.dispatch(deleteEvent(val?.eventId));
                    deleteEventFromCalendarAPI(val?.eventId)
                   .then(() => alert(`Event ${val?.summary} deleted`))
                   .catch(err => console.error(`error in deleting:`, err))
                   .finally(() => setDeleted(true));             
                  }
                  }> Delete </span>
                <hr></hr>
                <small className="pb-2 card-text">Starts @ 🕗&nbsp;:{`${val?.start?.dateTime}`}</small>
                <small className="p-2 card-text">Events status&nbsp;: {`${val?.eventStatus}`}</small>
                <small className="p-2 card-text">Created 📅&nbsp;: {`${val?.createdAt}`}</small>
                <small className="p-2 card-text">Hangout 🔗&nbsp;: <a href={`${val?.hangoutLink}`}>{`${val?.hangoutLink}`}</a></small>
                {/* <button onClick={() => setBasicModal(true)}>Show Attendees</button> */}
                
                <Button variant="primary" onClick={() => {
                  setEventInfo(val)
                  setModalShow(true)
                } }>
                  View Attendees
                </Button>
              </div>
            );
          })}
        </strong>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        eventInfo={eventInfo}
        onHide={() => {
          setModalShow(false)
        }}
        />
    </React.Fragment>
  )
}

export default AllEvents

