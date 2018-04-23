import React, { Component } from "react";
import styled from "styled-components";
// import GoogleMap from "./GoogleMap";
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
  .location {
    background-color: silver;
  }
  #input {
    position: absolute;
    z-index: 100;
    top: 5px;
    left: 0;
    right: 0;
  }
`;

const ATLANTIC_OCEAN = {
  latitude: 29.532804,
  longitude: -55.491477
};

var INITIAL_LOCATION = {
  address: "Atlanta, GA",
  position: {
    lat: 33.749,
    lng: -84.388
  }
};

class MapsComponent extends Component {
  state = {
    lat: 33.749,
    lng: -84.388,
    location: {
      address: ""
    },
    isGeocodingError: false,
    foundAddress: null
  };
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.state);
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
  }
  componentDidMount() {
      this.getInitialState()
    this.map = new google.maps.Map(this.refs.map, {
      center: {
        lat: INITIAL_LOCATION.position.lat,
        lng: INITIAL_LOCATION.position.lng
      },
      zoom: 8
    });
    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: this.state.lat,
        lng: this.state.lng
      }
    });
    this.geocoder = new google.maps.Geocoder();
  }

  getInitialState = () => {
    return {
      isGeocodingError: false,
      foundAddress: INITIAL_LOCATION.address
    };
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
    const address = this.searchInput.value;
    console.log(address)
    this.geocodeAddress(address);
  };

  geocodeAddress = address => {
    this.geocoder.geocode(
      { address: address },
      function handleResults(results, status){
        if (status === google.maps.GeocoderStatus.OK){
    
            this.setState({
                foundAddress: results[0].formatted_address,
                isGeocodingError: false
              });
    
          this.map.setCenter(results[0].geometry.location);
          this.marker.setPosition(results[0].geometry.location);
    
          return;
        }
    
        this.setState({
            foundAddress: null,
            isGeocodingError: true
          });
    
        this.map.setCenter({
          lat: ATLANTIC_OCEAN.latitude,
          lng: ATLANTIC_OCEAN.longitude
        });
    
        this.marker.setPosition({
          lat: ATLANTIC_OCEAN.latitude,
          lng: ATLANTIC_OCEAN.longitude
        });
      }.bind(this)
    );
    console.log(this.results)
    console.log(this.status)

  };

  handleResults = (results, status) => {
    if (status === google.maps.GeocoderStatus.OK) {

        this.setState({
            foundAddress: results[0].formatted_address,
            isGeocodingError: false
          });

      this.map.setCenter(results[0].geometry.location);
      this.marker.setPosition(results[0].geometry.location);

      return;
    }

    this.setState({
        foundAddress: null,
        isGeocodingError: true
      });

    this.map.setCenter({
      lat: ATLANTIC_OCEAN.latitude,
      lng: ATLANTIC_OCEAN.longitude
    });

    this.marker.setPosition({
      lat: ATLANTIC_OCEAN.latitude,
      lng: ATLANTIC_OCEAN.longitude
    });
  };

  setSearchInput = input => {
    this.searchInput = input;
  };

  render() {
    return (
      <MapWrap>
        <div id="input">
          <form onSubmit={this.getGeocode}>
            <input
              id="address"
              name="address"
              ref={this.setSearchInput}
              type="text"
              onChange={this.handleChange}
              value={this.state.address}
            />
            <button id="submit" type="submit" value="Geocode" />
          </form>
          <div className="location">
            
              {this.state.isGeocodingError ? (
                <p className="bg-danger">Address not found.</p>
              ) : (
                <p className="bg-info">{this.state.foundAddress}</p>
              )}
            
          </div>
        </div>
        <div id="map" ref="map" />
        {/* <GoogleMap lat={this.state.lat} lng={this.state.lng} refs={this.refs} /> */}
      </MapWrap>
    );
  }
}

export default MapsComponent;
