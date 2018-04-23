import React, { Component } from "react";
/*global google*/

class GoogleMap extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
  }
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }

  render() {
    return <div id="map" ref="map" />;
  }
}

export default GoogleMap;
