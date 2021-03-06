import React, { Component } from "react";
import styled from "styled-components";

const PostWrap = styled.div`
  width: 59vw;
  height: 133px;
  margin: 1vw 2vw;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.6);

  .post {
    display: block;
    height: 45px;
    padding: 3px;

    .subject {
      width: 43vw;
      height: 45px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid lightgray;
      font-weight: 700;
      text-align: start;
      align-items: center;
      button {
        width: 4vw;
        color: white;
      }
      button.delete {
        background-color: #e82c0c;
      }
      button.edit {
        background-color: #1b78ff;
      }
    }
    .content {
      width: 43vw;
      overflow-y: auto;
      p{
        height: 80px;
        margin: 0 auto;
       
      }
      
    }
  }
  .img {
    width: 72px;
    height: 133px;
    margin: 0 2vw;
    display: flex;
    align-items: center;

    img {
      width: 72px;
      border-radius: 50%;
    }
  }
  @media (max-width: 955px) {
    width: 94vw;
    margin: 18px auto;
    .post {
      width: 74vw;
      .subject {
        width: 69vw;
        button {
         text-align: center;
         width: 5vw;
        }
      }
      .content {
        width: 69vw;
      }
      
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
              <button className="edit" onClick={this.props.toggleEditPost}>
                Edit
              </button>
              <button className="delete" onClick={this.props.toggleDeletePost}>
                 X
              </button>
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
