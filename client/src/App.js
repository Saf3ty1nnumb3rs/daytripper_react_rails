import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { injectGlobal } from "styled-components";
import "./App.css";

import LandingView from "./components/universalcomponents/LandingView";
import IndexView from "./components/universalcomponents/IndexView";
import DestinationPage from "./components/destinationcomponents/DestinationPage";



injectGlobal`

@import url('https://fonts.googleapis.com/css?family=Anton|Lobster|Pacifico');


*, :after, :before {
  box-sizing: inherit;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: darkgray;
  font-family: "Anton", sans-serif;
}
#map {
  height: 100%;
}
#footer {

  right: 0;
  left: 0;
  @media (max-width: 955px) {
    position: relative;
    margin-bottom: 0;
    bottom: 0;
  }
}
`;




class App extends Component {

  state = {
    users: [],
    destinations: [],
    showSignUp: false,
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
  toggleSignUp = () => {
    this.setState( { showSignUp: !this.state.showSignUp} )
}

  render() {
    const LandingViewWrap = props => {
      return <LandingView {...props} showSignUp={this.state.showSignUp} toggleSignUp={this.toggleSignUp} getAllUsers={this.getAllUsers} />;
    };
    const IndexWrapper = props => {
      return (
        <IndexView
          toggleSignUp={this.toggleSignUp}
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
          toggleSignUp={this.toggleSignUp}
          showSignUp={this.props.toggleSignUp}
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
