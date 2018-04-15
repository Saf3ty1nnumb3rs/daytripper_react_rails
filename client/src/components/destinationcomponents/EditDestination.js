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
    background-color: #ff3100;
    color: white;
  }
`;

const TextWrap = styled.div`
  width: 24vw;
  margin: 2vw auto;
  position: relative;
  form {
    button {
    font-size: 1.3vw;
    width: 5vw;
    border-radius: 4px;
  } 
    .inputs {
    font-size: 1.5vw;
    margin: 10% auto;
    width: 80%;
    height: 2.4vw;
    border: none;
    border-bottom: 1px solid black;
  }
  }
`;

class EditDestination extends Component {

    handleDestChange = event => {
        console.log(this.props.destination)
        this.props.handleChange(event, this.props.destination.id);
      };

  render() {
    const destination = this.props.destination;
    return (
      <EditWrap>
        <ImageWrap>
          <img src={destination.image} alt={destination.title} />
        </ImageWrap>
        <TextWrap>
            Edit {destination.title}
          <form onSubmit={this.props.handleSubmit}>
            <div>
              <input
                className="inputs"
                name="title"
                value={destination.title}
                type="text"
                onChange={this.handleDestChange}
                onBlur={() =>
                  this.props.updateDestination(this.props.destination)
                }
              />
            </div>
            <div>
              <input
                className="inputs"
                name="image"
                value={destination.image}
                type="text"
                onChange={this.handleDestChange}
                onBlur={() =>
                  this.props.updateDestination(this.props.destination)
                }
              />
            </div>
            <div>
              <input
                className="inputs"
                name="description"
                value={destination.description}
                type="text"
                onChange={this.handleDestChange}
                onBlur={() =>
                  this.props.updateDestination(this.props.destination)
                }
              />
            </div>
            <button onClick={this.props.toggleDestView}>Edit</button>
          </form>
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
