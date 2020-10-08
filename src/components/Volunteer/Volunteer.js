
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../fakeData';

const Volunteer=()=>{
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);

  const handleClick = (volunteerName,picture) =>{
    const newUser = {...loggedInUser}
    newUser.volunteer = volunteerName;
    newUser.volunteerPhoto = picture;
    setLoggedInUser(newUser)
}
    return (
      <div>
      <div className="row justify-content-around">
          {
              fakeData.map(charity =>{
               return   <Link key = {charity.id} onClick = {() => handleClick(charity.title, charity.image)} to = {`/register/${charity.id}`} className="col-sm-3 nav-link">
                          <div>
                              <div>
                                  <img src={charity.image} className = 'w-100' alt=""/>
                              </div>
                              <div>
                                      <h3 style = {{backgroundColor:'orange' }} className = 'p-2 text-white'> {charity.title} </h3>
                              </div>
                          </div>
                  </Link>
              })
          }
      </div>
  </div>
       
    );
};

export default Volunteer;