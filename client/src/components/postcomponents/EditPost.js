import React, { Component } from "react";
import styled from "styled-components";

const EditWrap = styled.div`
  width: 55vw;
  height: 10vw;
  margin: 1vw 2vw;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.6);
  align-items: center;
  form {
    .subject {
      width: 22.5vw;
      border-bottom: 1px solid lightgray;
      font-weight: 700;
      text-align: start;
    }
    textarea#content {
      width: 43vw;
    }
  }
  .img {
    width: 5vw;
    height: auto;
    margin: 0 2vw;

    img {
      width: 5vw;
      border-radius: 50%;
    }
  }
`;
const ButtonWrap = styled.div`

`



class EditPost extends Component {


    handleChange = event => {
        
        this.props.handlePostChange(event, this.props.post.id);
      };

  render() {
      const post= this.props.post
    return (
      <EditWrap>
        <form className="form" onSubmit={this.updatePost}>
          <input
            className="image"
            name="image"
            onChange={this.handleChange}
            type="text"
            onBlur={() => this.props.updatePost(post)}
            value={post.image}
          />
          <input
            id="subject"
            name="subject"
            onChange={this.handleChange}
            type="text"
            onBlur={() => this.props.updatePost(post)}
            value={post.subject}
            required
          />
          <textarea
            id="content"
            name="content"
            onChange={this.handleChange}
            type="text"
            onBlur={() => this.props.updatePost(post)}
            value={post.content}
            maxLength="140"
            required
          />

          <ButtonWrap>
            <button onClick={this.props.toggleEditPost}>Edit</button>
            <button type="reset" onClick={this.props.toggleEditPost}> Cancel </button>
          </ButtonWrap>
        </form>
      </EditWrap>
    );
  }
}

export default EditPost;
