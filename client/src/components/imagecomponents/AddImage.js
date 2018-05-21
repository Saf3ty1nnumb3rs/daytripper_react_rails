import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const AddForm = styled.div`
  width: 28vw;
  height: 28vw;
  position:relative;
`;

const ButtonWrap = styled.div`
  display: flex;
justify-content: center;
position: absolute;
left: 0;
right: 0;
bottom: 15px;
button {
    font-size: 1.3vw;
    width: 7vw;
}
button:first-child {
    border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  }
  button:nth-child(2) {
    border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  }Í
`;
const Card = styled.div`
  width: 28vw;
  height: 28vw;
  display: block;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.8);
  p {
    margin: 0 auto;
    padding-top: 7px;
    font-size: 2vw;
  }
  .inputs {
    font-size: 1.5vw;
    margin: 10% auto;
    width: 80%;
    height: 2.8vw;
    border: none;
    border-bottom: 1px solid black;
  }
  @media (max-width: 955px) {
    .inputs {
      margin: 1vw auto;
      height: 2vw;
    }
  }
`;

class AddImage extends Component {
  state = {
    newImage: {
      image: "",
      description: ""
    },
    err: ""
  };

  
  handleChange = event => {
    event.preventDefault();

    const name = event.target.name;
    const newImage = { ...this.state.newImage };
    newImage[name] = event.target.value;
    this.setState({ newImage: newImage });
    
    
  };


  addImage = async event => {
    event.preventDefault();
    event.target.reset()
    
    const payload = {
      image: {
        image: this.state.newImage.image,
        description: this.state.newImage.description
      }
    };
    try {
      console.log(this.params);
      await axios.post(`/api/destinations/${this.props.destId}/images`, payload);
  
      await this.props.getSingleDestination(this.props.destId);
      this.setState({ newImage: { image: "", description: "" } });
    }catch(err){
      console.log(err)
      this.setState( { err: err.message } )
    };
    }
   

  render() {
    return (
      <AddForm>
        <Card>
          <p>Add an image to {this.props.destination.title}</p>
          <form onSubmit={this.addImage}>
            <input
              className="inputs"
              name="image"
              onChange={this.handleChange}
              type="text"
              placeholder="Image URL"
              value={this.state.image}
            />
            <textarea
              className="inputs"
              name="description"
              onChange={this.handleChange}
              placeholder="Description"
              type="text"
              value={this.state.description}
              maxLength="200"
            />

            <ButtonWrap>
              <button type="submit">Add Image</button>
              <button type="reset"> Cancel </button>
            </ButtonWrap>
          </form>
        </Card>
      </AddForm>
    );
  }
}

export default AddImage;
