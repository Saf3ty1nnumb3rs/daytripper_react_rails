import React, { Component } from "react";
import styled from "styled-components";

const CardWrap = styled.div`
  width: 28vw;
  height: 28vw;
  overflow: hidden;
  position: relative;
  img {
    width: 37vw;
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
    .delete {
      padding: 0;
      color: white;
      border: none;
      width: 14vw;
      height: 30px;
      background-color: #f44336;
      border-top-left-radius: 8px;
    }
    .view {
      border-top-right-radius: 8px;
      padding: 0;
      color: white;
      border: none;
      width: 14vw;
      height: 30px;
      background-color: lightgreen;
    }
  }
  .text {
    text-align: left;
    font-size: 1vw;
    z-index: 100;
    position: absolute;
    top: 5px;
  }
`;

class ImageCard extends Component {
  render() {
      const image = this.props.image
    return (
      <CardWrap>
        <div className="text">
          <p>{image.description}</p>
        </div>
        <div className="buttons">
          <div>
            <button className="delete" onClick={this.props.toggleDeleteCard}>
              Delete
            </button>
          </div>
          <div>
            <button className="view" onClick={this.props.toggleViewImage}>
              View
            </button>
          </div>
        </div>
        <img src={image.image} alt={image.id} />
      </CardWrap>
    );
  }
}

export default ImageCard;
