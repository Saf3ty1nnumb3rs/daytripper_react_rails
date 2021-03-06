import React, { Component } from "react";
import styled from "styled-components";

const DeleteWrap = styled.div`
  width: 63vw;
  height: 38vw;
  display: flex;
  position: relative;
  @media (max-width: 955px) {
    width: 95vw;
    height: 40vw;
  }
`;
const ImageWrap = styled.div`
  width: 33vw;
  height: 33vw;
  margin-top: 2vw;
  margin-left: 2vw;
  overflow: hidden;
  border-radius: 4px;
  img {
    width: 40vw;
    height: auto;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 15px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  button {
    font-size: 1.3vw;
    width: 5vw;
  }
  button:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  button:nth-child(2) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #ff3100;
    color: white;
  }
`;

const TextWrap = styled.div`
  width: 24vw;
  margin: 2vw auto;
  position: relative;
  p:first-child {
    font-size: 2.5vw;
  }
  p:nth-child(2) {
    font-size: 1.5vw;
    
  }
`;

class DeleteDestination extends Component {
  render() {
    const destination = this.props.destination;
    return (
      <DeleteWrap>
        <ImageWrap>
          <img src={destination.image} alt={destination.title} />
        </ImageWrap>
        <TextWrap>
          <p>Are you sure you want to delete {destination.title}?</p>
          <ButtonWrap>
            <button onClick={this.props.toggleDestView}>Back</button>
            <button onClick={this.props.removeDestination}>Delete</button>
          </ButtonWrap>
        </TextWrap>
      </DeleteWrap>
    );
  }
}

export default DeleteDestination;
