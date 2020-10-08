import React, { createContext, useState } from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Donation from './components/Donation/Donation';

import Event from './components/Event/Event';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext= createContext();

const App = () => {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
     <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
       <p>name:{loggedInUser.name}</p>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/donation">
            <Donation></Donation>
          </Route>
         <Route path="/blog">
           <Blog></Blog>
         </Route>
         <PrivateRoute path="/event">
           <Event></Event>
         </PrivateRoute>
         <PrivateRoute path="/register/:id">
           <Register></Register>
         </PrivateRoute>
         <Route path="/admin">
           <Admin></Admin>
         </Route>
         <Route path='/login'>
              <Login></Login>
         </Route>
         <Route exact path="/">
           <Home></Home>
         </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    
  );
};

export default App;