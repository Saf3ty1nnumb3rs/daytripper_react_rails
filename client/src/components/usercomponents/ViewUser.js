import React, { Component } from 'react';
import styled from "styled-components";


const ImageWrap = styled.div`
  width: 13vw;
  height: 13vw;
  overflow: hidden;
  img {
    width: 16vw;
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