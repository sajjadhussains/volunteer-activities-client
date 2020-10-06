import React from 'react';

import fakeData from '../../fakeData';
import Volunteer from '../Volunteer/Volunteer';


const Home = () => {
  
    return (
        <div>
        
           <div className="row">
          
          {
                fakeData.map(charity=><Volunteer key={charity.id} charity={charity}></Volunteer>)
               
                }
          
           </div>
            
        </div>
    );
};

export default Home;