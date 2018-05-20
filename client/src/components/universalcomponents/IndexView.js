import React, { Component } from "react";
import Navbar from "./Navbar";
import ListUser from "../usercomponents/ListUser";
import ListDestination from "../destinationcomponents/ListDestination";
import AddDestination from '../destinationcomponents/AddDestination'
import WeatherPanel from './WeatherPanel'
import MapsComponent from './MapsComponent'
import Footer from './Footer'
import styled from "styled-components";

const IndexWrap = styled.div`
  .nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
  }
  .bottom-list {
    left: 0;
  }
`;
const ElementContainer = styled.div`
  height: 90vw;
  width: 100vw;
  margin-top: 100px;
  margin-bottom: 50px;
  margin-right: 22px;
  margin-left: auto;
  position: relative;
  @media (max-width: 955px) {
    height: auto;
    margin-top: 38px;
    display: block;
  }
`;

class IndexView extends Component {
  render() {
    return (
      <IndexWrap>
        <Navbar className="nav" {...this.props} />
        <ListDestination
          destinations={this.props.destinations}
          getAllDestinations={this.props.getAllDestinations}
        />
        <ElementContainer>
          <AddDestination
            destinations={this.props.destinations}
            getAllDestinations={this.props.getAllDestinations}
          />
          <MapsComponent />
          <WeatherPanel />
        </ElementContainer>
        <ListUser
          {...this.props}
          className="bottom-list"
          users={this.props.users}
          getAllUsers={this.props.getAllUsers}
          updateUser={this.props.updateUser}
          handleChange={this.props.handleChange}
        />
        <Footer />
      </IndexWrap>
    );
  }
}

export default IndexView;
