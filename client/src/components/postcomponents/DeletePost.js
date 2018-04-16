import React, { Component } from 'react';
import styled from "styled-components";

const DeleteWrap = styled.div`
  width: 55vw;
  height: 10vw;
  margin: 1vw 2vw;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.6);
  align-items: center;
  `




class DeletePost extends Component {
    render() {
        return (
            <DeleteWrap>
                Confirm post delete.
                <button onClick={this.props.toggleDeletePost}>Back</button>
                <button onClick={this.props.removePost}>Delete</button>

            </DeleteWrap>
        );
    }
}

export default DeletePost;