import React, { Component } from "react";
import styled from "styled-components";
import ViewUser from './ViewUser'



class UserComponent extends Component {
  render() {
    return (
      <div>
        <ViewUser
          key={this.props.key}
          index={this.props.index}
          userId={this.props.userId}
          id={this.props.id}
          users={this.props.users}
        />
      </div>
    );
  }
}

export default UserComponent;
