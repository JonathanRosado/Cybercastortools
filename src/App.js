import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Conversions from './Conversions';
import PasswordCracking from './PasswordCracking';
import RotateN from './RotateN';
import hashes from './hashes';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let self = this;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <div className="navbar">
                <div className="navheader">Cybercastor Toolkit</div>
                <NavLink to="/conversions" activeClassName="navbutton-selected" className="navbutton">Conversions</NavLink>
                <NavLink to="/hash-conversions" activeClassName="navbutton-selected" className="navbutton">Hash Conversions</NavLink>
                <NavLink to="/rotate-n" activeClassName="navbutton-selected" className="navbutton">Rotate N</NavLink>
                <NavLink to="/password-cracking" activeClassName="navbutton-selected" className="navbutton">Password Cracking</NavLink>
              </div>
            </nav>
            <Route path="/" exact component={Conversions} />
            <Route path="/rotate-n/" component={RotateN} />
            <Route path="/hash-conversions/" component={hashes} />
            <Route path="/conversions" component={Conversions} />
            <Route path="/password-cracking/" component={PasswordCracking} />
            <Route path="/users/" component={Conversions} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
