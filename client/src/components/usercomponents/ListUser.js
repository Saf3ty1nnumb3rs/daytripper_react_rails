import React, { Component } from "react";
import styled from "styled-components";
import UserComponent from "./UserComponent";

const ListWrap = styled.div`
margin-top: 5vw;
margin-bottom: 5vw;
width: 100%;
height: auto;
display: flex;
overflow: auto;
`;

class ListUser extends Component {
  render() {
    return (
      <ListWrap>
        {this.props.users.map((user, i) => {
          return (
            <UserComponent
              key={user.id}
              index={i}
              userId={user.id}
              id={user.username}
              users={this.props.users}
              getAllUsers={this.props.getAllUsers}
            />
          );
        })}
      </ListWrap>
    );
  }
}

export default ListUser;
