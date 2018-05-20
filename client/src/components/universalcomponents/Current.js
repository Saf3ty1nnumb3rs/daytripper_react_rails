import _ from "lodash";
import React from "react";
import styled from "styled-components";

const Current = styled.div`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  text-align: start;
  padding-left: 1vw;
  .h1 {
    font-size: 2.5vw;
  }
  .h2 {
    font-size: 2vw;
  }
  @media (max-width: 955px) {
    .data {
      margin:0 auto;
      width: 45vw;
      .h1 {
        font-size: 4vw;
      }
      .h2 {
        font-size: 3.3vw;
      }
    }
  }
`;

function round(num) {
  const precision = 3;
  return _.round(num, precision);
}
export default props => {
  return (
    <Current>
      <div className="data">
        <div className="h1">Current Weather {props.name}</div>
        <div className="h2">Current Temp: {round(props.current)}</div>
        <div className="h2">
          High: {round(props.high)} Low: {round(props.low)}
        </div>
        <div className="h2">Humidity: {props.humidity}</div>
        <div className="h2">Weather: {props.description}</div>
      </div>
    </Current>
  );
};
