import React, { Component } from "react";
import styled from "styled-components";
/*global google*/

const Map = styled.div`
  width: 28vw;
  height: 16vw;
  .googs {
    width: 28vw;
    height: 16vw;
  }
`;

class SecondaryMap extends Component {
  shouldComponentUpdate() {
    return true;
  }
  componentWillReceiveProps(nextProps){
      if(nextProps !== this.props){
         console.log('Next props:' + nextProps.lat, nextProps.lon)
         this.map.setCenter({lat: nextProps.lat, lng:nextProps.lon})
      }
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map2, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      },
      mapTypeId: google.maps.MapTypeId.HYBRID, labels:true
    });
  }

  render() {
    console.log(this.props.lat, this.props.lon);
    return (
      <Map>
        <div className="googs" ref="map2" />
      </Map>
    );
  }
}

export default SecondaryMap;
