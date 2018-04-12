import React, { Component } from "react";
import Navbar from "./Navbar";
import ListUser from "../usercomponents/ListUser";
import ListDestination from "../destinationcomponents/ListDestination";
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
  .footer {
    left: 0;
    bottom: 0;
  }
`;

class IndexView extends Component {
  render() {
    return (
      <IndexWrap>
        <Navbar className='nav'{...this.props} />
        <ListDestination
          destinations={this.props.destinations}
          getAllDestinations={this.props.getAllDestinations}
        />
        <ListUser
          users={this.props.users}
          getAllUsers={this.props.getAllUsers}
        />
        <Footer className='footer' {...this.props} />
      </IndexWrap>
    );
  }
}

export default IndexView;
