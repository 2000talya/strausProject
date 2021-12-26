import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import Candidates from './components/candidates/Candidates';
import Profile from './components/candidates/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/candidates" component={Candidates} />
          <Route exact path="/candidates/profile" component={Profile} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
