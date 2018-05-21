import React, { Component } from "react";
import ImageComponent from "./ImageComponent";
import AddImage from "./AddImage";
import styled from "styled-components";

const ListWrap = styled.div`
  height: 100%;
  width: 28vw;
  overflow: auto;
  position: relative;
  margin-right: 2.5vw;
  margin-left: auto;
  display: block;
  border: 2px solid lightgray;
  background-color: white;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.8);
  @media (max-width: 955px) {
    height: 28vw;
    bottom: 0;
    position: relative;
    width: 95vw;
    margin: 2vw auto;
    display: flex;
  }
`;
class ListImage extends Component {
  render() {
    return (
      <ListWrap>
        <AddImage
          getSingleDestination={this.props.getSingleDestination}
          destId={this.props.destId}
          destination={this.props.destination}
        />
        {this.props.images.map((image, i) => {
          return (
            <ImageComponent
              key={image.id}
              index={i}
              destId={this.props.destId}
              image={this.props.images[i]}
              getSingleDestination={this.props.getSingleDestination}
            />
          );
        })}
      </ListWrap>
    );
  }
}

export default ListImage;
