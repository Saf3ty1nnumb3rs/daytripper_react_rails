import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import ListImage from "../imagecomponents/ListImage";

const DestinationWrap = styled.div``;

const ImageWrap = styled.div`
  width: 20vw;
  height: 20vw;
  overflow: hidden;
  img {
    width: 30vw;
    height: auto;
  }
`;

class DestinationComponent extends Component {
  state = {
    destination: {},
    images: [],
    posts: []
  };

  componentDidMount() {
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
        <ListImage
          destId={destination}
          images={this.state.images}
          getSingleDestination={this.getSingleDestination}
        />
      </DestinationWrap>
    );
  }
}

export default DestinationComponent;
