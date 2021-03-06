import React, { Component } from "react";
import styled from "styled-components";

const DeleteWrapper = styled.div`
  width: 28vw;
  height: 28vw;
  overflow: hidden;
  position: relative;
  img {
    width: 40vw;
    height: auto;
    opacity: 0.2;
    z-index: 0;
  }

  .buttons {
    display: flex;
    width: 28vw;
    margin-left: 0;
    padding: 0;
    bottom: 0;
    position: absolute;
    z-index: 1000;
    button {
      font-size: 2vw;
    }

    .delete {
      padding: 0;
      color: white;
      border: none;
      width: 14vw;
      height: 3vw;
      background-color: #f44336;
      border-top-right-radius: 8px;
    }
    .edit {
      border-top-left-radius: 8px;
      padding: 0;
      color: white;
      border: none;
      width: 14vw;
      height: 3vw;
      background-color: #008cba;
    }
  }
  .text {
    text-align: left;
    font-size: 2vw;
    z-index: 100;
    position: absolute;
    top: 5px;
  }
`;

class DeleteImage extends Component {
  render() {
    const image = this.props.image;
    return (
      <DeleteWrapper>
        <div className="text">
          <p>Are you sure you want to delete this image? </p>
        </div>
          <div className="buttons">
            <div>
              <button className="edit" onClick={this.props.toggleDeleteCard}>
                Back
              </button>
            </div>
            <div>
              <button className="delete" onClick={this.props.deleteImage}>
                Delete
              </button>
            </div>
          </div>
        <img src={image.image} alt={image.id} />
      </DeleteWrapper>
    );
  }
}

export default DeleteImage;
