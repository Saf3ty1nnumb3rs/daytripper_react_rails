import React, { Component } from "react";
import styled from "styled-components";
import ViewUser from "./ViewUser";
import UserCard from "./UserCard";

const UserWrap = styled.div`
button {
    width: 30vw;
  height: 30vw;
  padding: 0;
}

`

class UserComponent extends Component {
  state = {
    viewUser: true,
    cardView: false
  };

  toggleView = () => {
    this.setState({
      viewUser: !this.state.viewUser,
      cardView: !this.state.cardView
    });
   
  };
  render() {
    return (
      <UserWrap>
        {this.state.viewUser ? (
          <button onClick={this.toggleView}>
            <ViewUser
              index={this.props.index}
              userId={this.props.userId}
              id={this.props.id}
              users={this.props.users}
            />
          </button>
        ) : null}
        {this.state.cardView ? (
          <button onClick={this.toggleView}>
            <UserCard
              index={this.props.index}
              userId={this.props.userId}
              id={this.props.id}
              users={this.props.users}
              viewUser={this.state.viewUser}
            />
          </button>
        ) : null}
      </UserWrap>
    );
  }
}

export default UserComponent;
