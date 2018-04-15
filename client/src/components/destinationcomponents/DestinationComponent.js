import React, { Component } from "react";
import styled from "styled-components";
import ViewDestination from "./ViewDestination";
import EditDestination from "./EditDestination";
import DeleteDestination from "./DeleteDestination";
import axios from 'axios'

const DestinationWrap = styled.div`
  width: 63vw;
  height: 38vw;
  margin-left: 2vw;
  background-color: white;
  position: absolute;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.8);
`;

class DestinationComponent extends Component {
  state = {
    viewDest: true,
    deleteDest: false,
    editDest: false,
    error: ''
  };
  toggleEdit = async () => {
    await this.setState({ editDest: !this.state.editDest });
    this.state.editDest
      ? await this.setState({ viewDest: false, deleteDest: false })
      : await this.setState({ viewDest: true, deleteDest: false });
  };
  toggleDelete = async () => {
    await this.setState({ deleteDest: !this.state.deleteDest });
    this.state.deleteDest
      ? await this.setState({ viewDest: false, editDest: false })
      : await this.setState({ viewDest: true, editDest: false });
  };

  toggleDestView = () => {
    this.setState({
      viewDest: true,
      deleteDest: false,
      editDest: false
    });
  };
  removeDestination = async destination => {
    try {
      await axios.delete(`/api/destinations/${this.props.destId}`)
      this.props.getAllDestinations()
      this.props.history.push('/destinations')
    }catch(err) {
      console.log(err)
      this.setState( { error: err.message} )
    }
  }

  render() {
    const destination = this.props.match.params.id;
    return (
      <DestinationWrap>
        {this.state.viewDest ? (
          <ViewDestination
          {...this.props}
            destination={this.props.destination}
            destId={destination}
            getSingleDestination={this.props.getSingleDestination}
            toggleEdit={this.toggleEdit}
            toggleDelete={this.toggleDelete}
          />
        ) : null}
        {this.state.editDest ? (
          <EditDestination
          {...this.props}
            destination={this.props.destination}
            destId={destination}
            getSingleDestination={this.props.getSingleDestination}
            toggleDelete={this.toggleDelete}
            toggleDestView={this.toggleDestView}
            handleChange={this.props.handleChange}
            updateDestination={this.props.updateDestination}
          />
        ) : null}
        {this.state.deleteDest ? (
          <DeleteDestination
          {...this.props}
            destination={this.props.destination}
            destId={destination}
            getAllDestinations={this.props.getAllDestinations}
            toggleEdit={this.toggleEdit}
            toggleDestView={this.toggleDestView}
            removeDestination={this.removeDestination}
          />
        ) : null}
      </DestinationWrap>
    );
  }
}

export default DestinationComponent;
