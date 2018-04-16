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
    deletePost: false,
    err: ""
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

  updatePost = async (post) => {
    try {
      const destId = this.props.destId;
      const postId = this.props.post.id;

      await axios.patch(`/api/destinations/${destId}/posts/${postId}`, post);
      await (res => {
        this.props.getSingleDestination(destId);
      });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  removePost = async() => {
    try {
        await axios.delete(`/api/destinations/${this.props.destId}/posts/${this.props.post.id}`)
        this.props.getSingleDestination(this.props.destId)
    }catch(err){
        console.log(err)
    }
  }

  render() {
    const post = this.props.post;
    return (
      <PostWrapper>
        {this.state.viewPost ? (
          <PostView
            post={post}
            toggleEditPost={this.toggleEditPost}
            toggleDeletePost={this.toggleDeletePost}
          />
        ) : null}

        {this.state.editPost ? (
          <EditPost
            post={post}
            handlePostChange={this.props.handlePostChange}
            toggleDeletePost={this.toggleDeletePost}
            toggleViewPost={this.toggleViewPost}
            updatePost={this.updatePost}
            toggleEditPost={this.toggleEditPost}
          />
        ) : null}

        {this.state.deletePost ? (
          <DeletePost
            post={post}
            removePost={this.removePost}
            toggleEditPost={this.toggleEditPost}
            toggleViewPost={this.toggleViewPost}
          />
        ) : null}
      </PostWrapper>
    );
  }
}

export default PostComponent;
