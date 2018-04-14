import React, { Component } from "react";
import ImageComponent from './ImageComponent'
import styled from 'styled-components'


const ListWrap = styled.div`
  height: 100%;
  width: 33vw;
  overflow: hidden;
  margin-right: 0;
  display: block;


`
class ListImage extends Component {
  render() {
    return (
      <ListWrap>
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
