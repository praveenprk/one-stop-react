import React, {useState} from 'react'
import { store } from '../../store/store';
import ShowAttendees from './ShowAttendees';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AllEvents = () => {

const eventsInState = store.getState().calEvents;
// const [basicModal, setBasicModal] = useState(false);
const [modalShow, setModalShow] = useState(false);
const [eventInfo, setEventInfo] = useState([]);

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
          <div key={i} className='d-flex flex-row justify-content-around'>
            <span className='badge bg-primary flex-wrap rounded-pill'>{`${names.email}`}</span>
            <p>{`${names?.responseStatus}`}</p>
          </div>
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
            // val?.start?.dateTime
            return (
              <div key={i} className="d-flex flex-column card-body shadow-lg p-3 mb-5 bg-white rounded">
                <h5 className="card-title">{val?.summary}</h5>
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

