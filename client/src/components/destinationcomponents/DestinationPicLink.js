import React, { Component } from 'react';
import styled from 'styled-components'

const ImageWrap = styled.div`
width: 20vw;
height: 20vw;
overflow: hidden;
img {
    width: 30vw;
    height: auto;
}
`
class DestinationPicLink extends Component {
    render() {
        const destination = this.props.destinations[this.props.index]
        return (
           
            <ImageWrap>
              <img src={destination.image} alt={destination.title}  />  
            </ImageWrap>
            
        );
    }
}

export default DestinationPicLink;