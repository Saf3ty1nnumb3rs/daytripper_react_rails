import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { injectGlobal } from "styled-components";
import "./App.css";

import LandingView from "./components/universalcomponents/LandingView";
import IndexView from "./components/universalcomponents/IndexView";
import DestinationPage from "./components/destinationcomponents/DestinationPage";



injectGlobal`
*, :after, :before {
  box-sizing: inherit;
}
html, body {
  height: 100%;
  margin: 0;
}
`;




class App extends Component {

  state = {
    users: [],
    destinations: [],
    showLogin: false,
    error1: "",
    error2: ""
  };

  componentDidMount() {
    this.getAllUsers();
    this.getAllDestinations();
  }

  handleChange = (event, id) => {
    const name = event.target.name;
    console.log(event.target.name);
    console.log(event.target);
    const newState = [...this.state.users];
    console.log(newState);

    const userToChange = newState.find(user => user.id === id);
    console.log(userToChange);
    userToChange[name] = event.target.value;
    this.setState({ users: newState });
  };

  updateUser = async user => {
    //   const newUser =this.state.users.find(dog => dog.id === user)
    const userId = user.id;
    await axios.patch(`/api/users/${userId}`, user);

    console.log("We all in here");
    await (res => {
      this.getAllUsers();
    });
  };

  getAllDestinations = async props => {
    try {
      const res = await axios.get("/api/destinations");
      this.setState({
        destinations: res.data.destinations
      });
    } catch (err) {
      console.log(err);
      this.setState({
        error2: err.message
      });
    }
  };

  getAllUsers = async () => {
    try {
      const res = await axios.get("/api/users");

      this.setState({
        users: res.data.users
      });
    } catch (err) {
      console.log(err);
      this.setState({
        error1: err.message
      });
    }
  };

  render() {
    const LandingViewWrap = props => {
      return <LandingView {...props} />;
    };
    const IndexWrapper = props => {
      return (
        <IndexView
          getAllDestinations={this.getAllDestinations}
          getAllUsers={this.getAllUsers}
          users={this.state.users}
          updateUser={this.updateUser}
          handleChange={this.handleChange}
          destinations={this.state.destinations}
          showLogin={this.state.showLogin}
          {...props}
        />
      );
    };
    const DestinationWrapper = props => {
      return (
        <DestinationPage
          {...props}
          users={this.state.users}
          getAllDestinations={this.getAllDestinations}
          getAllUsers={this.getAllUsers}
          updateUser={this.updateUser}
          handleChange={this.handleChange}
          destinations={this.state.destinations}
          
        />
      );
    };

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={LandingViewWrap} />
            <Route exact path="/destinations" render={IndexWrapper} />
            <Route exact path="/destinations/:id" render={DestinationWrapper} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
