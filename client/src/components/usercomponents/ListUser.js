import React, { Component } from "react";
import styled from "styled-components";
import UserComponent from "./UserComponent";

const ListWrap = styled.div`
  margin-top: 5vw;
  width: 100%;
  height: auto;
  display: flex;
  overflow: auto;
  position: relative;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.8);
  
`;

class ListUser extends Component {
  render() {
    return (
      <ListWrap>
        {this.props.users.map((user, i) => {
          return (
            <UserComponent
              {...this.props}
              user={this.props.users[i]}
              key={user.id}
              index={i}
              handleChange={this.props.handleChange}
              updateUser={this.props.updateUser}
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
