import React, { Component } from "react";
import ListDestination from "./ListDestination";
import ListUser from "../usercomponents/ListUser";
import DestinationComponent from "./DestinationComponent";
import Navbar from "../universalcomponents/Navbar";
import styled from "styled-components";

const DestinationWrap = styled.div`
  .nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
  }
  .bottom-list {
    left: 0;
    bottom: -300px;
  }
`;

class DestinationPage extends Component {
  render() {
    return (
      <DestinationWrap>
        <Navbar />
        <ListDestination
          destinations={this.props.destinations}
          getAllDestinations={this.props.getAllDestinations}
        />
        <DestinationComponent
          {...this.props}
          destinations={this.props.destinations}
          getAllDestinations={this.props.getAllDestinations}
        />
        <ListUser
          {...this.props}
          className="bottom-list"
          users={this.props.users}
          getAllUsers={this.props.getAllUsers}
          updateUser={this.props.updateUser}
          handleChange={this.props.handleChange}
        />
      </DestinationWrap>
    );
  }
}

export default DestinationPage;
