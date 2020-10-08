import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css'

const Register = () => {
  const { register, errors } = useForm();

    const history = useHistory()
   // const {volunteerId} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [volunteer, setVolunteer] = useState({})
    const handleChange = (e) =>{
        const newVolunteer = {...volunteer}
        newVolunteer[e.target.name] = e.target.value;
        newVolunteer.name = loggedInUser.name;
        newVolunteer.email = loggedInUser.email;
        newVolunteer.volunteer = loggedInUser.volunteer;
        newVolunteer.photoUrl = loggedInUser.volunteerPhoto;
        setVolunteer(newVolunteer);
    }
    const handleSubmit = (e) => {
        console.log(volunteer)
        fetch('https://boiling-shelf-23561.herokuapp.com/addRegister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteer)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data){
                alert('registration successfull');
            }
            history.push('/event') 
        })
        e.preventDefault();
    }
    return (
        <div className = 'register-form'>
            <h3>Register as a Volunteer</h3>
            <form className="register-form">
                <input onChange = {handleChange} className = "form-control" name = 'name' type="text" value = {loggedInUser.name} required />
                <input onChange = {handleChange} className = "form-control" name = 'email' type="text" value = {loggedInUser.email} required/>
                <input onChange = {handleChange} className = "form-control" type="date" name="date" required/>
                <input onChange = {handleChange} className = "form-control" name = 'description' type="text" placeholder = 'Description' required/>
                <input onChange = {handleChange} className = "form-control" name = "volunteer" type="text" value = {loggedInUser.volunteer} required/>
                <input onClick = {handleSubmit} className = "form-control" type = "submit" value = "Registration" />
            </form>
        </div>
    );
};

export default Register;