import React, { Component } from "react";
import styled from "styled-components";
/*global google*/

const Map = styled.div`
  width: 28vw;
  height: auto;
  margin: 14px auto;
  #pac-container {
      margin: 10px auto;
  }
  .googs {
    width: 28vw;
    height: 8vw;
  }
  @media (max-width: 955px) {
      width: 95vw;
      height: auto;
      .googs {
          width: 95vw;
          height:23vw;
      }
  }
`;

class SecondaryMap extends Component {
  state = {
    place_formatted: "",
    place_id: "",
    place_location: ""
  };
  shouldComponentUpdate() {
    return true;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      console.log("Next props:" + nextProps.lat, nextProps.lon);
      this.map.setCenter({ lat: nextProps.lat, lng: nextProps.lon });
      this.marker.setPosition({ lat: nextProps.lat, lng: nextProps.lon });
    }
  }

  componentDidMount() {
    this.setSecondary()
  }
  setSecondary = (event) => {

    this.map = new google.maps.Map(this.refs.map2, {
        zoom: 12,
        center: {
          lat: this.props.lat,
          lng: this.props.lon
        },
        mapTypeId: google.maps.MapTypeId.HYBRID,
        labels: true
      });
      this.marker = new google.maps.Marker({
        map: this.map,
        position: {
          lat: this.props.lat,
          lng: this.props.lon
        }
      });
  
      let inputNode = document.getElementById("pac-input");
      const options = { types: ['(cities)'] }
      let autoComplete = new window.google.maps.places.Autocomplete(inputNode, options);
      autoComplete.addListener("place_changed", () => {
        let place = autoComplete.getPlace();
        let location = place.geometry.location;
  
        this.setState({
          place_formatted: place.formatted_address,
          place_id: place.place_id,
          place_location: location.toString()
        });
        this.props.getWeather(place.formatted_address)
        this.props.currentWeather(place.formatted_address)
        // bring the selected place in view on the map
      //   this.map.fitBounds(place.geometry.viewport);
      });

  } 
  render() {
    return (
      <Map>Check the weather:
        <form onSubmit={this.setSecondary} id="pac-container">
          <input id="pac-input" type="text" placeholder="Select from dropdown" />
        </form>
        <div className="googs" ref="map2" />
      </Map>
    );
  }
}

export default SecondaryMap;
