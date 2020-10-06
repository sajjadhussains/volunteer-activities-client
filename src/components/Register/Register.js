import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from '@material-ui/core';
import { Button } from 'react-bootstrap';

const Register = () => {
        const { register, handleSubmit, watch, errors } = useForm();
        const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const onSubmit = data => {
            console.log('form submitted', data)
          };
      
    return (
        <div>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
      {errors.name && <span className="error">Name is required</span>}
     
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
      {errors.email && <span className="error">Email is required</span>}
     
      <input type="date"name="date" ref={register({ required: true })}  placeholder="Your Address" />
      {errors.date && <span className="error">date is required</span>}
     
      <input name="description" ref={register({ required: true })}  placeholder="Description"/>
      {errors.description && <span className="error">description is required</span>}
      <br/>
      <Button>Registration</Button>
    </form>
        </div>
    );
};

export default Register;