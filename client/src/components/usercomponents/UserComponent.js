import React, { Component } from "react";
import styled from "styled-components";
import ViewUser from "./ViewUser";
import UserCard from "./UserCard";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import axios from "axios";

const UserWrap = styled.div``;

class UserComponent extends Component {
  state = {
    viewUser: true,
    cardView: false,
    editView: false,
    deleteView: false
  };

  //async await?????? Yes. Async await.
  toggleUserView = async () => {
    await this.setState({ viewUser: !this.state.viewUser });
    this.state.viewUser
      ? await this.setState({
          cardView: false,
          deleteView: false,
          editView: false
        })
      : await this.setState({
          cardView: true,
          deleteView: false,
          editView: false
        });
  };

  //Toggle the edit form-----------------------//
  toggleEditView = async () => {
      
    await this.setState({ editView: !this.state.editView });
    this.state.editView
      ? this.setState({ cardView: false, deleteView: false })
      : this.setState({ cardView: true, deleteView: false });
  };
  //Toggle the delete card-----------------------//
  toggleDeleteView = async () => {
    await this.setState({ deleteView: !this.state.deleteView });
    this.state.deleteView
      ? this.setState({ cardView: false, editView: false })
      : this.setState({ cardView: true, editView: false });
  };
  
  // Delete Single User --------------------------//
  deleteUser = async user => {
    await axios.delete(`/api/users/${this.props.userId}`);
    await this.props.getAllUsers();
  };

  render() {
    return (
      <UserWrap>
        {this.state.viewUser ? (
          <ViewUser
            user={this.props.user}
            toggleUserView={this.toggleUserView}
          />
        ) : null}

        {this.state.cardView ? (
          <UserCard
            user={this.props.user}
            userId={this.props.userId}
            toggleUserView={this.toggleUserView}
            toggleEditView={this.toggleEditView}
            toggleDeleteView={this.toggleDeleteView}
          />
        ) : null}

        {this.state.editView ? (
          <EditUser
            user={this.props.user}
            users={this.props.users}
            userId={this.props.userId}
            index={this.props.index}
            toggleUserView={this.toggleUserView}
            toggleEditView={this.toggleEditView}
            toggleDeleteView={this.toggleDeleteView}
            handleChange={this.props.handleChange}
            updateUser={this.props.updateUser}
          />
        ) : null}

        {this.state.deleteView ? (
          <DeleteUser
            user={this.props.user}
            userId={this.props.userId}
            deleteUser={this.deleteUser}
            toggleUserView={this.toggleUserView}
            toggleDeleteView={this.toggleDeleteView}
            deleteView={this.state.deleteView}
          />
        ) : null}
      </UserWrap>
    );
  }
}

export default UserComponent;
