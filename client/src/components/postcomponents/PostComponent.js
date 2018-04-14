import React, { Component } from 'react';

class PostComponent extends Component {

    // handleImageChange = async (event, id) => {
    //     event.preventDefault();
    //     const name = event.target.name;
    //     console.log(event.target.name);
    //     console.log(event.target);
    //     const newState = [...this.state.images];
    //     console.log(newState);
    //     const imageToChange = newState.find(image => image.id === id);
    //     console.log(imageToChange);
    //     imageToChange[name] = event.target.value;
    //     this.setState({ images: newState });
    //   };
    
    //   updateImage = async image => {
    //     const destId = this.props.match.params.id;
    //     const imageId = image.id;
    //     await axios.patch(`/api/destinations/${destId}/images/${image.id}`, image);
    //     console.log(image);
    //     await (res => {
    //       this.getSingleDestination();
    //     });
    //   };
    




    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default PostComponent;