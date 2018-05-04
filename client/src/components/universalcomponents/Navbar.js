import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrap = styled.div`
  height: 10vw;
  width: 100%;
  background-color: black;
  color: white;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a:visited {
    color: white;
  }
  .logo {
    margin-left: 4vw;
    font-size: 3vw;
    font-family: "Lobster", cursive;
    text-decoration: none;
  }
  .signs {
    display: flex;
    margin-right: 3vw;
    justify-content: space-around;
    width: 20vw;
    
    a button {
      background: transparent;
      color: white;
      border: none;
      font-size: 1.3vw;
    }
  }
  h1 {
    font-family: "Lobster", cursive;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <NavWrap>
        <Link to="/" className="logo">
          Daytrippr
        </Link>
        <div className="signs">
          <Link to="/">
            <button onClick={this.props.toggleSignUp}>Sign Up</button>
          </Link>
          <Link to="/">
            <button> Log In</button>
          </Link>
          <Link to="/destinations">
            <button> Destinations</button>
          </Link>
        </div>
      </NavWrap>
    );
  }
}

export default Navbar;
