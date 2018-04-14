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
  
  .buttons {
    display: flex;
    width: 28vw;
    margin-left: 0;
    padding: 0;
    bottom: 0;
    position: absolute;
    z-index: 1000;

    .delete {
      padding: 0;
      color: white;
      border: none;
      width: 9.33vw;
      height: 30px;
      background-color: #f44336;
    }
    .edit {
      border-top-left-radius: 4px;
      padding: 0;
      color: white;
      border: none;
      width: 9.33vw;
      height: 30px;
      background-color: #008cba;
    }
    .view {
      border-top-right-radius: 8px;
      padding: 0;
      color: white;
      border: none;
      width: 9.33vw;
      height: 30px;
      background-color: lightgreen;
    }
  }
  .text {
    text-align: left;
    font-size: 2vw;
    z-index: 100;
    position: absolute;
    top: 5px;
  }
`;

class DeleteUser extends Component {
  render() {
    const user = this.props.user;
    return (


      <DeleteWrapper>
        <div className="text">
          <p>Are you sure you want to delete {user.username}? </p>

          <div className="buttons">
            <div>
              <button className="edit" onClick={this.props.toggleDeleteView}>
                Back
              </button>
            </div>
            <div>
              <button className="delete" onClick={this.props.deleteUser}>
                Delete
              </button>
            </div>
          </div>
        </div>
        <img src={user.image} alt={user.username} />

      </DeleteWrapper>
    );
  }
}

export default DeleteUser;
