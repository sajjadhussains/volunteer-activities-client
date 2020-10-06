import React from 'react';
import { Card,Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Volunteer = ({charity}) => {
  const history = useHistory()
  const handleChangeVolunteer = (title) => {
      history.push(`/event/${title}`);
  }
    return (
            <div onClick={()=>handleChangeVolunteer(charity.title)}className="col-sm-3 container">
                    <Card>
                      <Card.Img variant="top" src={charity.image} />
                      <Card.Body style={{backgroundColor:'orange'}}>
                      <Card.Text>
                         <h3>{charity.title}</h3>
                    </Card.Text>
                      </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        
                    </Card>
                  </div>
       
    );
};

export default Volunteer;