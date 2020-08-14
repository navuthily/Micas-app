import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from '../pages/Login/index.tsx'
import Register from '../pages/Register/index.tsx';
import Logout from '../pages/Logout.js'
import PublicRoute from './PublicRoute';
import  UserRoute from './user/UserRoute'
// import Logout from "../pages/Auth/Logout";
export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path='/login' exact component={Login}/>
          <PublicRoute path='/register' exact componet={Register}/>
          <PublicRoute path='/logout' exact componet={Logout}/>
          <UserRoute path='/'/>
        </Switch>
      </div>
    </Router>
  );
}
