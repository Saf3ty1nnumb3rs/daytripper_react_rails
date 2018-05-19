import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios';

import Chart from './Chart'
import SecondaryMap from "./SecondaryMap";

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
const API_KEY = "531f5508f22bb1668df89181cf760723";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const INITIAL_LOCATION = {   
      lat: 33.749,
      lon: -84.388
    
  };

class WeatherPanel extends Component {
    state = {
        term: '',
        payload: [],
        lat: INITIAL_LOCATION.lat,
        lon: INITIAL_LOCATION.lon
    }

    
    onInputChange = (event) => {

        this.setState( { term: event.target.value } )
        console.log(event.target.value)
        }
      }

    getWeatherOnDemand = async (city) => {
        const url = `${ROOT_URL}&q=${city},us`;

        try {
        const request = await axios.get(url);
        const {lat, lon } = request.data.city.coord
        this.setState( { 
            payload: [request.data],
            lat: lat,
            lon: lon
         } )
        } catch (err) {
        console.log(err.message);
        }
    };
    onFormSubmit = (event) => {
        event.preventDefault()
  
        //We need to go and fetch the weather data
        console.log(this.state.term)
        this.getWeatherOnDemand(this.state.term);
        this.setState( { term: ''} );
    }

    renderWeather = (payload) => {
        const temps = payload.list.map(weather => weather.main.temp*(9/5)-459.67);
        const city = payload.city.name
        return(
             <Chart key={city} city={city} data={temps} color="green" units="F"/>
        )
    }
    renderCatch = () => {
        if(!this.state.payload){
            return <div>Loading...</div>
        }else{
            return(
            this.state.payload.map(this.renderWeather)
            )
        }
    }
  render() {
    return (
      <WeatherWrap>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Get forecast"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span>
            <button type="submit">
              Submit
            </button>
          </span>
        </form>
        {/* {this.state.term.length > 2 ? <ul> {cityList}</ul> : null} */}
        <SecondaryMap lat={this.state.lat} lon={this.state.lon}/>
        {this.renderCatch()}
      </WeatherWrap>
    );
  }
}

export default WeatherPanel;
