import React, { Component } from 'react';
import { Router } from 'react-router';
import {Link} from 'react-router-dom'
import logo from './logo.svg';
import DrinksIndexContainer from './DrinksIndexContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Link to={DrinksIndexContainer}>Link to Drink!</Link>
        </p>
      </div>
    );
  }
}

export default App;
