import React, { Component } from "react";
import styled from "styled-components";

const CardWrap = styled.div`
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

class UserCard extends Component {
  render() {
    const user = this.props.user;

    return (
      <CardWrap>
        <div className="text">
          <p>{user.username}</p>
          <p>location:{user.location}</p>
        </div>
        <div className="buttons">
          <div>
            <button className="edit" onClick={this.props.toggleEditView}>
              Edit
            </button>
          </div>
          <div>
            <button className="delete" onClick={this.props.toggleDeleteView}>
              Delete
            </button>
          </div>
          <div>
            <button className="view" onClick={this.props.toggleUserView}>
              View
            </button>
          </div>
        </div>
        <img src={user.image} alt={user.username} />
      </CardWrap>
    );
  }
}

export default UserCard;
