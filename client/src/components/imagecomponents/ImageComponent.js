import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import ViewImage from "./ViewImage";
import DeleteImage from "./DeleteImage";
import ImageCard from "./ImageCard";


const ImageComponentWrap = styled.div`


`

class ImageComponent extends Component {
  state = {
    viewImage: true,
    imageCard: false,
    deleteImage: false
  };

  toggleViewImage = async () => {
    await this.setState({ viewImage: !this.state.viewImage });
    this.state.viewImage
      ? await this.setState({
          imageCard: false,
          deleteImage: false
        })
      : await this.setState({
          imageCard: true,
          deleteImage: false
        });
  };


  toggleDeleteCard = async () => {
    await this.setState({ deleteImage: !this.state.deleteImage });
    this.state.deleteImage
      ? this.setState({
          viewImage: false,
          imageCard: false
        })
      : this.setState({
          viewImage: false,
          imageCard: true
        });
  };

  deleteImage = async user => {
    await axios.delete(
      `/api/${this.props.destId}/images/${this.props.image.id}`
    );
    await this.props.getSingleDestination(this.props.destId);
  };

  render() {
    return (
      <ImageComponentWrap>
        {this.state.viewImage ? (
          <ViewImage
            image={this.props.image}
            toggleViewImage={this.toggleViewImage}
          />
        ) : null}
        {this.state.imageCard ? (
          <ImageCard
            image={this.props.image}
            toggleDeleteCard={this.toggleDeleteCard}
            toggleViewImage={this.toggleViewImage}
          />
        ) : null}
        {this.state.deleteImage ? (
          <DeleteImage
            image={this.props.image}
            deleteImage={this.props.deleteImage}
            destId={this.props.destId}
            toggleDeleteCard={this.toggleDeleteCard}
          />
        ) : null}
      </ImageComponentWrap>
    );
  }
}

export default ImageComponent;
