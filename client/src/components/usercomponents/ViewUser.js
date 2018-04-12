import React, { Component } from 'react';
import styled from "styled-components";


const ImageWrap = styled.div`
  width: 28vw;
  height: 28vw;
  overflow: hidden;
  position: relative;
  img {
    width: 32vw;
    height: auto;
  }
  button {
      top: 8px;
      left: 21vw;
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

class ViewUser extends Component {
    render() {
        const user = this.props.users[this.props.index]
        return (
            <ImageWrap>
                <img src={user.image} alt={user.username}/>
                <button onClick={this.props.toggleView}>View</button>
            </ImageWrap>
        );
    }
}

export default ViewUser;