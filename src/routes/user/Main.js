import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../../pages/User/Home/index.tsx'
import Create from '../../pages/User/Create/index.tsx'
function Main() {
  return (
    <div className="View">
      <Router>
      <div>
          <Switch>
        <Route path="/" exact component ={Home}>
            <Home/>
        </Route>
        <Route path="/create" exact component ={Create}>
          <Create/>
        </Route>     
        <Route path="/add" exact component ={Post}>
        </Route>     
        </Switch>
      </div>
    </Router>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Post() {
  return <h2>Post</h2>;
}
export default Main;
