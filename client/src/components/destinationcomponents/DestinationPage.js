import React, { Component } from "react";
import ListDestination from "./ListDestination";
import ListUser from "../usercomponents/ListUser";
import DestinationComponent from "./DestinationComponent";
import Navbar from "../universalcomponents/Navbar";
import styled from "styled-components";
import axios from "axios";
import ListImage from "../imagecomponents/ListImage";
import ListPost from "../postcomponents/ListPost";
import Footer from '../universalcomponents/Footer'


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
    posts: [],
    error1: "",
    error2: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props)
      this.getSingleDestination(nextProps.match.params.id);
  }
  componentDidMount(){
    this.getSingleDestination(this.props.match.params.id)
  }

  getSingleDestination = async destinationId => {
    try {
      const res = await axios.get(`/api/destinations/${destinationId}`);
      console.log(res.data);
       await this.setState({
        destination: res.data.destination,
        images: res.data.images,
        posts: res.data.posts
      });
    } catch (err) {
      console.log(err);
      this.setState({ error1: err.message });
    }
  };
  //Destination edit functions/////////////////////////
  //handleChange
  handleChange = (event, id) => {
    const name = event.target.name;
    const newState = { ...this.state.destination };
    console.log(newState);
    newState[name] = event.target.value;
    this.setState({ destination: newState });
  };
  //updateDestination
  updateDestination = async destination => {
    try {
      await axios.patch(`/api/destinations/${destination.id}`, destination);

      console.log("Destination updated");
      await (res => {
        this.props.getAllDestinations();
      });
    } catch (err) {
      console.log(err);
      this.setState({
        error2: err.message
      });
    }
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
            updateDestination={this.updateDestination}
            handleChange={this.handleChange}
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
        <Footer />
      </DestinationWrap>
    );
  }
}

export default DestinationPage;
