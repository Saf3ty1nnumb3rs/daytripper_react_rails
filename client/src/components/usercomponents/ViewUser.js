import React, { Component } from 'react';
import styled from "styled-components";


const ImageWrap = styled.div`
  width: 20vw;
  height: 20vw;
  overflow: hidden;
  img {
    width: 30vw;
    height: auto;
  }
`;

class ViewUser extends Component {
    render() {
        const user = this.props.users[this.props.index]
        return (
            <ImageWrap>
                <img src={user.image} alt={user.username}/>
            </ImageWrap>
        );
    }
}

export default ViewUser;