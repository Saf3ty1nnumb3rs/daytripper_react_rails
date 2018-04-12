import React, { Component } from "react";
import DestinationComponent from "./DestinationComponent";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListWrap = styled.div`
width: 100%
height: auto;
display: flex;
overflow: auto;
`;

class ListDestination extends Component {
  render() {
    return (
      <ListWrap>
        {this.props.destinations.map((dest, i) => {
          return (
            <Link key={i} to={`/api/destinations/${dest.id}`}>
              <DestinationComponent
                key={dest.id}
                index={i}
                destinationId={dest.id}
                id={dest.title}
                destinations={this.props.destinations}
              />
            </Link>
          );
        })}
      </ListWrap>
    );
  }
}

export default ListDestination;
