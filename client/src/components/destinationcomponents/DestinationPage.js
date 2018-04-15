import React, { Component } from "react";
import ListDestination from "./ListDestination";
import ListUser from "../usercomponents/ListUser";
import DestinationComponent from "./DestinationComponent";
import Navbar from "../universalcomponents/Navbar";
import styled from "styled-components";
import axios from "axios";
import ListImage from "../imagecomponents/ListImage";
import ListPost from "../postcomponents/ListPost";

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

const ElementContainer = styled.div`
  height: 80vw;
  width: 100vw;
  margin-top: 100px;
  margin-bottom: 50px;
  margin-right: 22px;
  margin-left: auto;
  position: relative;
`;

class DestinationPage extends Component {
  state = {
    destination: {},
    images: [],
    posts: []
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props)
      this.getSingleDestination(this.props.match.params.id);
  }

  getSingleDestination = async destinationId => {
    const res = await axios.get(`/api/destinations/${destinationId}`);
    console.log(res.data);
    this.setState({
      destination: res.data.destination,
      images: res.data.images,
      posts: res.data.posts
    });
  };

  render() {
    const destination = this.props.match.params.id;
    return (
      <DestinationWrap>
        <Navbar />
        <ListDestination
          destinations={this.props.destinations}
          getAllDestinations={this.props.getAllDestinations}
        />
        <ElementContainer>
          <DestinationComponent
            {...this.props}
            destId={destination}
            destination={this.state.destination}
            destinations={this.props.destinations}
            getAllDestinations={this.props.getAllDestinations}
          />
          <ListPost
            destination={this.state.destination}
            destId={destination}
            posts={this.state.posts}
            getSingleDestination={this.getSingleDestination}
          />
          <ListImage
            destination={this.state.destination}
            destId={destination}
            images={this.state.images}
            getSingleDestination={this.getSingleDestination}
          />
        </ElementContainer>
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
