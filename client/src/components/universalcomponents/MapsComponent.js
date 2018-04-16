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

class MapsComponent extends Component {
    render() {
        return (
            <MapWrap>
                stuff
            </MapWrap>
        );
    }
}

export default MapsComponent;