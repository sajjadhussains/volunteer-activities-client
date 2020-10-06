import { Link } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

const Event = () => {
    const {title} =useParams();
    return (
        <div style={{textAlign:'center'}}>
              <h1>Let's join for  {title} volunteer activities.</h1>
            <p>Want a <Link to="/home">different volunteer activities?</Link> </p>
        </div>
    );
};

export default Event;