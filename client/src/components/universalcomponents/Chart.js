import _ from 'lodash';
import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import styled from 'styled-components';

const Chart = styled.div`
    box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.8);
`

function average(data) {
    return _.round(_.sum(data)/data.length)
   
}

export default props => {
  return (
    <Chart>  
      <Sparklines height={90} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div> {props.city} 3-day Average Temp: {average(props.data)} {props.units}</div>
    </Chart>
  );
};
