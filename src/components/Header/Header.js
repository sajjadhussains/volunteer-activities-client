import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="container header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src="https://imgur.com/SxvN8DI.png" alt="" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className = 'd-flex justify-content-between'>
                <Nav className="ml-auto align-items-center m-4">
                <Link to ='/home' className = 'nav-link'>
                    Home
                </Link>
                <Link to ='/donation' className = 'nav-link'>
                    Donation
                </Link>
                <Link to ='/bolg' className = 'nav-link'>
                    Blog
                </Link>
                <Link to ='/event' className = 'nav-link'>
                    Event
                </Link>
                <Link to ='/register' className="nav-link">
                <Button variant="primary">Register</Button>
                </Link>
                <Link to ='/admin' className="nav-link">
                <Button variant="secondary">Admin</Button>
                </Link>
               </Nav>               
            </Navbar.Collapse>
      </Navbar>
      <div className="search-section">
       <div style={{textAlign:'center'}}>
       <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
       </div>
       <div className="form-section">
       <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
       </div>
      </div>
    </div>
  );
};

export default Header;