import React, { Component } from "react";
import styled from "styled-components";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

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

class UserCard extends Component {
  state = {
    innerCardView: true,
    editView: false,
    deleteView: false
  };

  toggleEditView = () => {
    this.setState({ editView: !this.state.editView });
    this.state.editView
      ? this.setState({ innerCardView: false, deleteView: false })
      : this.setState({ innerCardView: true, deleteView: false });
  };

  toggleDeleteView = () => {
    this.setState({ deleteView: !this.state.deleteView });
    this.state.deleteView
      ? this.setState({ innerCardView: false, editView: false })
      : this.setState({ innerCardView: true, editView: false });
  };

  render() {
    const user = this.props.users[this.props.index];

    return (
      <div>
        {this.state.innerCardView ? (
          <CardWrap>
            <button className="view" onClick={this.props.toggleView}>
              View
            </button>
            <div className="text">
              <p>{user.username}</p>
              <p>location:{user.location}</p>
              <div className="buttons">
                <div>
                  <button className="edit" onClick={this.toggleEditView}>
                    Edit
                  </button>
                </div>
                <div>
                  <button className="delete" onClick={this.toggleDeleteView}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <img src={user.image} alt={user.username} />
          </CardWrap>
        ) : null}

        {this.state.editView ? (
          <EditUser
            {...this.props}
            toggleDeleteView={this.toggleDeleteView}
            toggleEditView={this.toggleEditView}
          />
        ) : null}

        {this.state.deleteView ? (
          <DeleteUser
            {...this.props}
            toggleDeleteView={this.toggleDeleteView}
            toggleEditView={this.toggleEditView}
          />
        ) : null}
      </div>
    );
  }
}

export default UserCard;
