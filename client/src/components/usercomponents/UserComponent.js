import React, { Component } from "react";
import styled from "styled-components";
import ViewUser from "./ViewUser";
import UserCard from "./UserCard";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import axios from 'axios'

const UserWrap = styled.div``;

class UserComponent extends Component {
  state = {
    viewUser: true,
    cardView: false,
    editView: false,
    deleteView: false
  };
  //async await??????
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
  toggleEditView = async () => {
    await this.setState({ editView: !this.state.editView });
    this.state.editView
      ? this.setState({ cardView: false, deleteView: false })
      : this.setState({ cardView: true, deleteView: false });
  };

  toggleDeleteView = async () => {
    await this.setState({ deleteView: !this.state.deleteView });
    this.state.deleteView
      ? this.setState({ cardView: false, editView: false })
      : this.setState({ cardView: true, editView: false });
  };

  deleteUser = async user => {
      await axios.delete(`/api/users/${this.props.userId}`)
      await this.props.getAllUsers()
  }

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

        {this.state.editView ? (
          <EditUser
            index={this.props.index}
            userId={this.props.userId}
            id={this.props.id}
            users={this.props.users}
            toggleUserView={this.toggleUserView}
            toggleEditView={this.toggleEditView}
            toggleDeleteView={this.toggleDeleteView}
            viewUser={this.state.viewUser}
            cardView={this.state.cardView}
            editView={this.state.editView}
            deleteView={this.state.deleteView}
          />
        ) : null}

        {this.state.deleteView ? (
          <DeleteUser
            index={this.props.index}
            users={this.props.users}
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
