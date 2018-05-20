import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const AddWrap = styled.div`
  width: 59vw;
  height: 123px;
  margin: 1vw 2vw;
  border: 1px solid rgba(0, 0, 0, 0.6);
  align-items: center;
  form {
    input {
      width: 43vw;
      border: none;
      border-bottom: 1px solid black;
    }
    .subject {
      border-bottom: 1px solid lightgray;
      font-weight: 700;
      text-align: start;
    }
    textarea#content {
      width: 43vw;
      border: none;
      border-bottom: 1px solid black;
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
  @media (max-width: 955px) {
    form {
      input {
        width: 80vw;
      }
      textarea#content {
      width: 80vw;
      }
    }
    width: 93vw;
    margin: 18px auto;
  }
`;

const ButtonWrap = styled.div``;

class AddPost extends Component {
  state = {
    newPost: {
      image: "",
      subject: "",
      content: ""
    },
    err: ""
  };

  handleChange = event => {
    event.preventDefault();

    const name = event.target.name;
    const newPost = { ...this.state.newPost };
    newPost[name] = event.target.value;
    this.setState({ newPost: newPost });
  };

  clearForm = () => {
    this.setState( {
      newPost: {
        image: "",
        subject: "",
        content: ""
      }
    } )

  }

  addPost = async event => {
    event.preventDefault();
    event.target.reset();

    const payload = {
      post: {
        image: this.state.newPost.image,
        subject: this.state.newPost.subject,
        content: this.state.newPost.content
      }
    };
    try {
      console.log(this.params);
      await axios.post(`/api/destinations/${this.props.destId}/posts`, payload);

      await this.props.getSingleDestination(this.props.destId);
      this.setState({ newPost: { image: "", subject: "", content: "" } });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  render() {
    return (
      <AddWrap>
        <form className="form" onSubmit={this.addPost}>
          <input
            className="image"
            name="image"
            onChange={this.handleChange}
            type="text"
            placeholder="Image URL"
            value={this.state.newPost.image}
          />
          <input
            id="subject"
            name="subject"
            onChange={this.handleChange}
            type="text"
            placeholder="Subject"
            value={this.state.newPost.subject}
            required
          />
          <textarea
            id="content"
            name="content"
            onChange={this.handleChange}
            placeholder="Comment"
            type="text"
            value={this.state.content}
            maxLength="140"
            required
          />

          <ButtonWrap>
            <button type="submit">Add Post</button>
            <button type="reset" onClick={this.clearForm}> Cancel </button>
          </ButtonWrap>
        </form>
      </AddWrap>
    );
  }
}

export default AddPost;
