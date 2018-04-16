import React, { Component } from 'react';
import styled from 'styled-components'

const MapWrap = styled.div`
width: 63vw;
  height: 38vw;
  margin-left: 2vw;
  background-color: white;
  position: absolute;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.8);
  bottom: 0;
`
// const request = require('request');

// request({
//     url: 'https://api.foursquare.com/v2/venues/explore',
//     method: 'GET',
//     qs: {
//       client_id: 'HOQB4O0YC21NAUFPJ5QJKXR1D025H1C40D3Q0HLRMLQWLEGZ',
//       client_secret: 'MUSCQ5K2RBASWAUPXGPWHY451ZC50ESP435S4OZCHEKQSYOT',
//       ll: '40.7243,-74.0018',
//       query: 'coffee',
//       v: '20180323',
//       limit: 1
//     }
//   }, function(err, res, body) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(res);
//     }
//   });
  

class MapsComponent extends Component {
    render() {
        return (
            <MapWrap>
                stuff
                <button onClick={this.request}>Clicky</button>
            </MapWrap>
        );
    }
}

export default MapsComponent;