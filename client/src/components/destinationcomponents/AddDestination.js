import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const AddWrap = styled.div`
  width: 63vw;
  height: 38vw;
  margin-left: 2vw;
  background-color: white;
  position: absolute;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.8);
`;
const PositionWrap = styled.div`
  width: 63vw;
  height: 38vw;
  display: flex;
  position: relative;
`;
const ImageWrap = styled.div`
  background-image: url('https://static1.squarespace.com/static/570f1d454c2f8553e926cdc5/5786c752e4fcb577ca60c8ac/57858672c534a5ef75f99241/1512145729751/Coast+Camp%2C+Pt.+Reyes.jpg?format=1000w');
  background-size: cover;
  width: 33vw;
  height: 33vw;
  margin-top: 1vw;
  margin-left: 1vw;
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.8);
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

class AddDestination extends Component {
  state = {
    newDestination: {
      title: "",
      image: "",
      description: ""
    },
    redirect: false,
    err: ""
  };

  handleChange = event => {
    //1. Set variable to event target
    const name = event.target.name;
    //2. Spread props for new state
    const newDest = { ...this.state.newDestination };
    //3. Set the state value equal to the entered value
    newDest[name] = event.target.value;
    //4. Set the state equal to the entered value
    this.setState({ newDestination: newDest });
  };

  addDestination = async event => {
      event.preventDefault()
      const payload = {
          destination: {
            title: this.state.newDestination.title,
            image: this.state.newDestination.image,
            description: this.state.newDestination.description
          }
      } 
      try{ 
          await axios.post(`/api/destinations`, payload)
          await this.props.getAllDestinations()
          this.setState( {newDestination: {
            title: "",
            image: "",
            description: ""
          },
        redirect: true } )
      }catch(err){
          console.log(err.message)
          this.setState( { err: err.message } )
      }
  }
  render() {
      if(this.state.redirect){
          return(<Redirect to={`/destinations/${this.props.destinations[0].id}`} />)
      }
    const destination = this.state.newDestination;
    return (
      <AddWrap>
        <PositionWrap>
          <ImageWrap>
            
          </ImageWrap>
          <TextWrap>
            <form onSubmit={this.props.handleSubmit}>
                <p>Add a destination!</p>
              <div>
                <input
                  className="inputs"
                  name="title"
                  value={destination.title}
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Title"
                  required
                />
              </div>
              <div>
                <input
                  className="inputs"
                  name="image"
                  value={destination.image}
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Image URL"
                  required
                />
              </div>
              <div>
                <input
                  className="inputs"
                  name="description"
                  value={destination.description}
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Description"
                />
              </div>
              <ButtonWrap>
                <button type="submit" onClick={this.addDestination}>
                  +
                </button>
                <button type="reset">Cancel</button>
              </ButtonWrap>
            </form>
          </TextWrap>
        </PositionWrap>
      </AddWrap>
    );
  }
}

export default AddDestination;
