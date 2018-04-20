import React, { Component } from "react";
import styled from "styled-components";
import GoogleMap from "./GoogleMap";
import Geocode from 'react-geocode'
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
    address: ''
  };

  geocodeAddress = () => {
      Geocode.setApiKey('AIzaSyAs0j5GYFUkufjW0McWQ4Auj5VD0K9EvtY')
      Geocode.enableDebug()
      Geocode.fromAddress(this.state.address).then(
          response => {
              const { lat, lng } = response.results[0].geometry.location
              console.log(response.results)
              console.log(lat, lng)
          },
          error => {
              console.error(error)
          }
      )
    }

  render() {
    
    return (
      <MapWrap>
        <div id="input">
          <form onSubmit={this.geocodeAddress}>
            <input id="address" ref="address" type="textbox" value="Address" />
            <button id="submit" type="submit" value="Geocode" />
          </form>
        </div>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} refs={this.refs} />
      </MapWrap>
    );
  }
}

export default MapsComponent;
