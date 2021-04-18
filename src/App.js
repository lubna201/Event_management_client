import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AddService from './components/Dashboard/AddService/AddService';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddAdmin from './components/AddAdmin/AddAdmin';
import AddComment from './components/AddComment/AddComment';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          {/* <Route path="/appointment">
            <Appointment></Appointment>
          </Route> */}
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          {/* <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute> */}
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <PrivateRoute path="/addComment">
            <AddComment></AddComment>
          </PrivateRoute >
          <PrivateRoute path="/addServices">
            <AddService></AddService>
          </PrivateRoute >
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
