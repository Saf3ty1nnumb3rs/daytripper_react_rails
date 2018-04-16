import React, { Component } from 'react';
import styled from "styled-components";


const ImageWrap = styled.div`
  width: 28vw;
  height: 28vw;
  overflow: hidden;
  position: relative;
  background-color: white; 
  img {
    width: 32vw;
    height: auto;
  }
  button {
      top: 0;
      left: 0;
      width: 28vw;
      height: 28vw;
      border: none;
      text-shadow: 1px 1px lightgreen;
      background: transparent;
      position: absolute;
      
  }
`;

class ViewUser extends Component {
    render() {
        const user = this.props.user
        return (
            <ImageWrap>
                <img src={user.image} alt={user.username}/>
                <button onClick={this.props.toggleUserView}></button>
            </ImageWrap>
        );
    }
}

export default ViewUser;