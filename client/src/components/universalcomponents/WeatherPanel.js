import React, { Component } from 'react';
import styled from "styled-components";

const WeatherWrap = styled.div`
  width: 28vw;
  height: 38vw;
  margin-right: 2.5vw;
  margin-left: auto;
  border: 2px solid lightgray;
  background-color: white;
  position: relative;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.8);
`;



class WeatherPanel extends Component {

    getWeatherOnDemand = () => {
    
    }
    
    render() {
        return (
            <WeatherWrap>
                Future home of weather API
            </WeatherWrap>
        );
    }
}

export default WeatherPanel;