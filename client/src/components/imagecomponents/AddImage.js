import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios'

const AddForm = styled.div`
  width: 28vw;
  height: 28vw;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  button {
    font-size: 2vw;
    border-radius: 4px;
    margin: 2px;
  }
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
    font-size: 2vw;
      margin: 5% auto;
      width: 80%;
      height: 3vw;
      border: none;
      border-bottom: 1px solid black;
  }
`;

class AddImage extends Component {
  state = {
    newImage: {
      image: "",
      description: ""
    }
}
  
  handleChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const newImage = { ...this.state.newImage };
    newImage[name] = event.target.value;
    this.setState({ newImage:newImage });
  };

  addImage = async(event) => {
      event.preventDefault()
      const payload = {
          image:{
            image: this.state.newImage.image,
            description: this.state.newImage.description }
          }
          console.log(this.params)
          await axios.post(`/api/destinations/${this.props.destId}/images`, payload)
          
          await this.props.getSingleDestination(this.props.destId)
          this.setState( { newImage:{ image: "", description: ""} } )
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
