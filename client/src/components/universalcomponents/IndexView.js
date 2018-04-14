import React, { Component } from "react";
import Navbar from "./Navbar";
import ListUser from "../usercomponents/ListUser";
import ListDestination from "../destinationcomponents/ListDestination";
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

class IndexView extends Component { 

  render() {
    return (
      <IndexWrap>
        <Navbar className="nav" {...this.props} />
        <ListDestination
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
      </IndexWrap>
    );
  }
}

export default IndexView;
