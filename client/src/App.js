import React, { Component } from 'react';
import logo from './images/guidestones.jpg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { injectGlobal } from 'styled-components'

import LandingView from './components/universalcomponents/LandingView'
import IndexView from './components/universalcomponents/IndexView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Thunderdome</h1>
        </header>
        <p className="App-intro">
          bitches
          
        </p>
      </div>
    );
  }
}

export default App;
