import React, { Component } from "react";
import styled from "styled-components";
import ViewUser from "./ViewUser";
import UserCard from "./UserCard";

const UserWrap = styled.div``;

class UserComponent extends Component {
  state = {
    viewUser: true,
    cardView: false,
    editView: false,
    deleteView: false
  };
//async await??????
  toggleUserView = () => {
    this.setState({ viewUser: !this.state.viewUser });
    this.state.viewUser
      ? this.setState({ cardView: false, deleteView: false, editView: false })
      : this.setState({ cardView: true, deleteView: false, editView: false });
  };
  toggleEditView = () => {
    this.setState({ editView: !this.state.editView });
    this.state.editView
      ? this.setState({ cardView: false, deleteView: false })
      : this.setState({ cardView: true, deleteView: false });
  };

  toggleDeleteView = () => {
    this.setState({ deleteView: !this.state.deleteView });
    this.state.deleteView
      ? this.setState({ cardView: false, editView: false })
      : this.setState({ cardView: true, editView: false });
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
            toggleUserView={this.toggleUserView}
          />
        ) : null}
        {this.state.cardView ? (
          <UserCard
            index={this.props.index}
            userId={this.props.userId}
            id={this.props.id}
            users={this.props.users}
            viewUser={this.state.viewUser}
            cardView={this.state.cardView}
            editView={this.state.editView}
            deleteView={this.state.deleteView}
            toggleUserView={this.toggleUserView}
            toggleEditView={this.toggleEditView}
            toggleDeleteView={this.toggleDeleteView}
          />
        ) : null}
      </UserWrap>
    );
  }
}

export default UserComponent;
