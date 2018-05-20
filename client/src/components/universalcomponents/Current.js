import _ from 'lodash';
import React from "react";
import styled from 'styled-components';

const Current = styled.div`
    box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.8);
    text-align: start;
    padding-left: 1vw;
`




function round(num) {
    const precision= 3;
    return _.round(num, precision)
}
export default props => {
    return (
        <Current>
            <div><h1>Current Weather {props.name}</h1></div> 
            <div><h2>Current Temp: {round(props.current)}</h2></div>
            <div><h2>High: {round(props.high)} Low: {round(props.low)}</h2></div>
            <div><h2>Humidity: {props.humidity}</h2></div>
            <div><h2>Weather: {props.description}</h2></div>
        </Current>
    )
}