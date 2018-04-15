import React, { Component } from "react";
import styled from "styled-components";

const EditWrap = styled.div`
  width: 63vw;
  height: 38vw;
  display: flex;
  position: relative;
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

class EditDestination extends Component {
  render() {
    const destination = this.props.destination;
    return (
      <EditWrap>
        <ImageWrap>
          <img src={destination.image} alt={destination.title} />
        </ImageWrap>
        <TextWrap>
          <p>{destination.title}</p>
          <p>{destination.description}</p>
          <ButtonWrap>
            <button onClick={this.props.toggleDestView}>Back</button>
            <button onClick={this.props.toggleDelete}>Delete</button>
          </ButtonWrap>
        </TextWrap>
      </EditWrap>
    );
  }
}

export default EditDestination;
