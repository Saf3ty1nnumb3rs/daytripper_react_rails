import React, { Component } from "react";
import styled from "styled-components";
import GoogleMap from "./GoogleMap";
import Geocode from "react-geocode";
import axios from "axios";
/*global google*/

const MapWrap = styled.div`
  width: 63vw;
  height: 38vw;
  margin-left: 2vw;
  background-color: white;
  position: absolute;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.8);
  bottom: 0;

  #input {
    position: absolute;
    z-index: 100;
    top: 5px;
    left: 0;
    right: 0;
  }
`;

class MapsComponent extends Component {
  state = {
    lat: 33.749,
    lng: -84.388,
    location: {
      
      address: ""
    }
  };

  handleChange = event => {
    const name = event.target.name;
    const newState = { ...this.state.location };
    newState[name] = event.target.value;
    console.log(newState);
    this.setState({
      location: newState
    });
  };

  getGeocode = async event => {
    event.preventDefault();

    try {
      const address = this.state.location.address;
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${address}&key=AIzaSyDaRNeuHO-t_GpkEuuYg587TAxf6LKbHm4`
      );
      console.log(response);
      await this.setState({
        lat: response.results[0].geometry.location.lat,
        lng: response.results[0].geometry.location.lng
          
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
      <MapWrap>
        <div id="input">
          <form onSubmit={this.getGeocode}>
            <input
              id="address"
              name="address"
              ref="address"
              type="text"
              onChange={this.handleChange}
              value={this.state.address}
            />
            <button id="submit" type="submit" value="Geocode" />
          </form>
        </div>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} refs={this.refs} />
      </MapWrap>
    );
  }
}

export default MapsComponent;
