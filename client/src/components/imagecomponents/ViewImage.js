import React, { Component } from 'react';
import styled from "styled-components";


const ImageWrap = styled.div`
  width: 28vw;
  height: 28vw;
  overflow: hidden;
  position: relative;
  img {
    width: 37vw;
    height: auto;
  }
  button {
      top: 0;
      left: 0;
      width: 28vw;
      height: 28vw;
      border: none;
      background: transparent;
      position: absolute;
      
  }
  
`;

class ViewImage extends Component {
    render() {
        const image = this.props.image
        return (
            <ImageWrap>
                <img src={image.image} alt={image.id}/>
                <button onClick={this.props.toggleViewImage}></button>
            </ImageWrap>
        );
    }
}

export default ViewImage;