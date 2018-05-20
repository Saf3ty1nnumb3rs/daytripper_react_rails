import React, { Component } from "react";
import styled from "styled-components";

const PostWrap = styled.div`
  width: 55vw;
  height: 10vw;
  margin: 1vw 2vw;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.6);
  align-items: center;
  
  .post {
    display: block; 
    height: 10vw; 
    line-height: 1.2vw;
    padding: 3px;

    .subject {
      width: 43vw;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid lightgray;
      font-weight: 700;
      text-align: start;
      button {
        width: 4vw;
        color: white;
      }
      button.delete {
        background-color: #E82C0C;
      }
      button.edit {
        background-color: #1B78FF;
      }
    }
    .content {
        width:43vw;

    }
  }
  .img {
    width: 5vw;
    height: auto;
    margin:0 2vw;
    
    img{
        width: 5vw;
        border-radius: 50%;
    }
  }
`;

class PostView extends Component {
  render() {
    const post = this.props.post;
    return (
      <PostWrap>
        <div className="img">
          <img src={post.image} alt={post.subject} />
        </div>
        <div className="post">
          <div className="subject">
            <p>{post.subject}</p>
            <div>
                <button className="edit" onClick={this.props.toggleEditPost}>Edit</button>
                <button className="delete" onClick={this.props.toggleDeletePost}>Delete</button>
            </div>
          </div>

          <div className="content">
            <p>{post.content}</p>
          </div>
        </div>
      </PostWrap>
    );
  }
}

export default PostView;
