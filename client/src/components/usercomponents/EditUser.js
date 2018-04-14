import React, { Component } from "react";
import styled from "styled-components";

const EditWrapper = styled.div`
  width: 28vw;
  height: 28vw;
  overflow: hidden;
  position: relative;
  img {
    width: 32vw;
    height: auto;
    opacity: 0.2;
    z-index: 0;
  }
  button.view {
    top: 10px;
    left: 20vw;
    border: none;
    text-shadow: 1px 1px lightgreen;
    background: transparent;
    position: absolute;
    z-index: 1000;
  }

  .buttons {
    display: flex;
    .delete {
      color: white;
      border: none;
      background-color: #f44336;
    }
    .edit {
      color: white;
      border: none;
      background-color: #008cba;
    }
  }
  .text {
    text-align: left;
    font-size: 2vw;
    z-index: 100;
    position: absolute;
    top: 5px;
    left: 5px;
    button {
      margin: 2px;
      height: 4vw;
      width: 8vw;
      border-radius: 5px;
      box-shadow: 1px 2px 3px black;
    }
  }
  @media (min-width: 438px) {
    .buttons button {
      height: 5vw;
      width: 10vw;
    }
  }
  @media (min-width: 738px) {
    .buttons button {
      height: 4vw;
      width: 8vw;
    }
  }
  @media (min-width: 945px) {
    .buttons button {
      height: 3vw;
      width: 6vw;
    }
  }
  @media (max-width: 438px) {
    .buttons button {
      font-size: 7px;
    }
    button.view {
      left: 15vw;
    }
  }

  @media (max-width: 945px) {
    .buttons {
      display: block;
    }
  }
`;





class EditUser extends Component {

    handleUserChange = event => {
        console.log(this.props.user)
        this.props.handleChange(event, this.props.user.id);
      };


  render() {
    const user = this.props.user;
    console.log(this.props.user)
    return (

      <EditWrapper>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <input
              name="username"
              value={user.username}
              type="text"
              onChange={this.handleUserChange}
              onBlur={() => this.props.updateUser(this.props.user)}
              index={this.props.index}
            />
          </div>
          <div>
            <input
              name="image"
              value={user.image}
              type="text"
              onChange={this.handleUserChange}
              onBlur={() => this.props.updateUser(this.props.user)}
              index={this.props.index}
            />
          </div>
          <div>
            <input
              name="location"
              value={user.location}
              type="text"
              onChange={this.handleUserChange}
              onBlur={() => this.props.updateUser(this.props.user)}
              index={this.props.index}
            />
          </div>
          <button onClick={this.props.toggleEditView}>Edit</button>
        </form>
      </EditWrapper>
    );
  }
}

export default EditUser;
