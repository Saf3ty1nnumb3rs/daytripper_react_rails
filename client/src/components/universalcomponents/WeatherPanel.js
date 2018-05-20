import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Current from "./Current";
import Chart from "./Chart";
import SecondaryMap from "./SecondaryMap";

const WeatherWrap = styled.div`
  display: block;
  width: 28vw;
  height: 90vw;
  margin-right: 2.5vw;
  margin-left: auto;
  border: 2px solid lightgray;
  background-color: white;
  position: relative;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.8);
  .chart {
    margin-top: 10px;
  }
`;

const API_KEY = "531f5508f22bb1668df89181cf760723";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const CURRENT_ROOT = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const INITIAL_LOCATION = {
  lat: 33.749,
  lon: -84.388
};

class WeatherPanel extends Component {
  state = {
    term: "",
    payload: [],
    lat: INITIAL_LOCATION.lat,
    lon: INITIAL_LOCATION.lon,
    current: "",
    high: "",
    low: "",
    humidity: "",
    description: "",
    name:''
  };

  componentDidMount() {
    this.getWeatherOnDemand("Atlanta");
    this.currentWeather("Atlanta");
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
    console.log(event.target.value);
  };
  currentWeather = async city => {
    const current = `${CURRENT_ROOT}&q=${city}`;
    try {
      const req = await axios.get(current);
      const weather = req.data;
      const w = weather.main;
      console.log(req)
      this.setState({
        current: w.temp * (9 / 5) - 459.67,
        high: w.temp_max * (9 / 5) - 459.67,
        low: w.temp_min * (9 / 5) - 459.67,
        humidity: w.humidity + "%",
        description: weather.weather[0].description,
        name: weather.name
       
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  getWeatherOnDemand = async city => {
    const url = `${ROOT_URL}&q=${city},us`;

    try {
      const request = await axios.get(url);
      const { lat, lon } = request.data.city.coord;
      this.setState({
        payload: [request.data],
        lat: lat,
        lon: lon
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  onFormSubmit = event => {
    event.preventDefault();

    //We need to go and fetch the weather data
    console.log(this.state.term);
    this.getWeatherOnDemand(this.state.term);
    this.currentWeather(this.state.term);
    this.setState({ term: "" });
  };

  renderWeather = payload => {
    const temps = payload.list.map((weather, i) => {
      return weather.main.temp * (9 / 5) - 459.67;
    });
    const city = payload.city.name;
    return (
      <div key={city}>
        <div>
          <Current
            current={this.state.current}
            high={this.state.high}
            low={this.state.low}
            humidity={this.state.humidity}
            description={this.state.description}
            name={this.state.name}
          />
        </div>
        <div  className="chart">
          <Chart city={city} data={temps} color="green" units="F" />
        </div>
      </div>
    );
  };

  renderCatch = () => {
    if (!this.state.payload) {
      return <div>Loading...</div>;
    } else {
      return this.state.payload.map(this.renderWeather);
    }
  };

  render() {
    return (
      <WeatherWrap>
        <SecondaryMap
          currentWeather={this.currentWeather}
          getWeather={this.getWeatherOnDemand}
          lat={this.state.lat}
          lon={this.state.lon}
        />
        {this.renderCatch()}
      </WeatherWrap>
    );
  }
}

export default WeatherPanel;
