import React, { Component } from "react";
import axios from "axios";
import PostView from "./PostView";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
import styled from "styled-components";

const PostWrapper = styled.div``;

class PostComponent extends Component {
  state = {
    viewPost: true,
    editPost: false,
    deletePost: false
  };

  toggleViewPost = async () => {
    await this.setState({ viewPost: !this.state.viewPost });
    this.state.viewPost
      ? await this.setState({
          editPost: false,
          deletePost: false
        })
      : await this.setState({
          editPost: false,
          deletePost: false
        });
  };
  toggleEditPost = async () => {
    await this.setState({ editPost: !this.state.editPost });
    this.state.editPost
      ? await this.setState({
          viewPost: false,
          deletePost: false
        })
      : await this.setState({
          viewPost: true,
          deletePost: false
        });
  };

  toggleDeletePost = async () => {
    await this.setState({ deletePost: !this.state.deletePost });
    this.state.deletePost
      ? await this.setState({
          viewPost: false,
          editPost: false
        })
      : await this.setState({
          viewPost: true,
          editPost: false
        });
  };
  handlePostChange = async (event, id) => {
    event.preventDefault();
    const name = event.target.name;
    console.log(event.target.name);
    console.log(event.target);
    const newState = [...this.state.posts];
    console.log(newState);
    const postToChange = newState.find(post => post.id === id);
    console.log(postToChange);
    postToChange[name] = event.target.value;
    this.setState({ posts: newState });
  };

  updatePost = async post => {
    const destId = this.props.match.params.id;
    await axios.patch(`/api/destinations/${destId}/posts/${post.id}`, post);
    console.log(post);
    await (res => {
      this.getSingleDestination();
    });
  };

  render() {
    return (
      <PostWrapper>
        {this.state.viewPost ? (
          <PostView
            post={this.props.post}
            toggleEditPost={this.toggleEditPost}
            toggleDeletePost={this.toggleDeletePost}
          />
        ) : null}

        {this.state.editPost ? (
          <EditPost
            toggleDeletePost={this.toggleDeletePost}
            toggleViewPost={this.toggleViewPost}
          />
        ) : null}

        {this.state.deletePost ? (
          <DeletePost
            toggleEditPost={this.toggleEditPost}
            toggleViewPost={this.toggleViewPost}
          />
        ) : null}
      </PostWrapper>
    );
  }
}

export default PostComponent;
