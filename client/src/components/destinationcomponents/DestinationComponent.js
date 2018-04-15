import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import ListImage from "../imagecomponents/ListImage";
import ViewDestination from './ViewDestination'

const DestinationWrap = styled.div``;
const ElementContainer = styled.div`
  height:80vw;
  margin-top: 100px;
  margin-bottom: 50px;
`



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

        <ViewDestination />




        <ElementContainer>
          <ListImage
            destination={this.state.destination}
            destId={destination}
            images={this.state.images}
            getSingleDestination={this.getSingleDestination}
          />
        </ElementContainer>
      </DestinationWrap>
    );
  }
}

export default DestinationComponent;
