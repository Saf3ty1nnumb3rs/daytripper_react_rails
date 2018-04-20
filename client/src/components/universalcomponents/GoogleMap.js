import React, { Component } from "react";
/*global google*/ 

class GoogleMap extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
     
      this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng})
      
  }
  componentDidMount() {
      this.map = new google.maps.Map( this.refs.map, {
          center: { lat: this.props.lat, lng: this.props.lng },
          zoom:8
      })
      const geocoder = new google.maps.Geocoder()

      this.props.refs.submit
  }

  render() {
    return <div id="map" ref="map" />;
  }
}

export default GoogleMap;
