import React, {useState} from 'react'
/* import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit'; */
import AllEvents from './AllEvents';

const EventsNav = () => {

    const [justifyActive, setJustifyActive] = useState('tab1');
    
    const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    {/* <><MDBTabs justify className='mb-3'>
          <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                  All Events
              </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                  Upcoming Events
              </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
                  Another link
              </MDBTabsLink>
          </MDBTabsItem>
      </MDBTabs>
            <MDBTabsContent>
              <MDBTabsPane show={justifyActive === 'tab1'}><AllEvents/></MDBTabsPane>
              <MDBTabsPane show={justifyActive === 'tab2'}>Tab 2 content</MDBTabsPane>
              <MDBTabsPane show={justifyActive === 'tab3'}>Tab 3 content</MDBTabsPane>
            </MDBTabsContent>
        </> */}
  )
}

export default EventsNav