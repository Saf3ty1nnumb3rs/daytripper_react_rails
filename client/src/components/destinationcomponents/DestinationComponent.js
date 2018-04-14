import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import ListImage from "../imagecomponents/ListImage";

const DestinationWrap = styled.div``;
const ListContainer = styled.div`
  height:60vw;
  margin-top: 100px;
  margin-bottom: 50px;


`

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
        <ListContainer>
          <ListImage
            destId={destination}
            images={this.state.images}
            getSingleDestination={this.getSingleDestination}
          />
        </ListContainer>
      </DestinationWrap>
    );
  }
}

export default DestinationComponent;
