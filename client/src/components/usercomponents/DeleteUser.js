import React, { Component } from "react";
import styled from "styled-components";

const DeleteWrapper = styled.div`
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
  @media (max-width: 438px) {
    .buttons button {
      font-size: 7px;
    }
    button.view {
        left: 15vw;
  }
  }
`;

class DeleteUser extends Component {
  render() {
    const user = this.props.users[this.props.index];
    return (
      <DeleteWrapper>
        <button className="view" onClick={this.props.toggleView}>
          view
        </button>
        <h2>Are you sure you want to delete {user.username}? </h2>
        <div>
          <button className="edit" onClick={this.props.toggleDeleteView}>
            Back
          </button>
        </div>
        <div>
          <button className="delete" onClick={this.toggleRemoveUser}>
            Delete
          </button>
          <img src={user.image} alt={user.username} />
        </div>
      </DeleteWrapper>
    );
  }
}

export default DeleteUser;
