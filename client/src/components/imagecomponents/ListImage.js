import React, { Component } from "react";
import ImageComponent from './ImageComponent'
import AddImage from './AddImage'
import styled from 'styled-components'


const ListWrap = styled.div`
  height: 100%;
  width: 33vw;
  overflow: auto;
  position: relative;
  margin-right: -8vw;
  margin-left: auto;
  display: block;


`
class ListImage extends Component {
  render() {
    return (
      <ListWrap>
        <AddImage getSingleDestination={this.props.getSingleDestination} />
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
