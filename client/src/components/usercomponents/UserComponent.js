import React, { Component } from "react";
import styled from "styled-components";
import ViewUser from "./ViewUser";
import UserCard from "./UserCard";

const UserWrap = styled.div`


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
          
            <ViewUser
              index={this.props.index}
              userId={this.props.userId}
              id={this.props.id}
              users={this.props.users}
              toggleView={this.toggleView}
            />
         
        ) : null}
        {this.state.cardView ? (
            <UserCard
              index={this.props.index}
              userId={this.props.userId}
              id={this.props.id}
              users={this.props.users}
              viewUser={this.state.viewUser}
              toggleView={this.toggleView}
            />
        ) : null}
      </UserWrap>
    );
  }
}

export default UserComponent;
