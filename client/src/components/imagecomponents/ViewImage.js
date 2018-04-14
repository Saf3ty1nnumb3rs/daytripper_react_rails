import React, { Component } from 'react';
import styled from "styled-components";


const ImageWrap = styled.div`
  width: 24vw;
  height: 24vw;
  overflow: hidden;
  position: relative;
  img {
    width: 37vw;
    height: auto;
  }
  button {
      top: 0;
      left: 0;
      width: 24vw;
      height: 24vw;
      border: none;
      text-shadow: 1px 1px lightgreen;
      background: transparent;
      position: absolute;
      
  }
  @media (max-width: 438px) {
      button{
        left: 15vw;
  }
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