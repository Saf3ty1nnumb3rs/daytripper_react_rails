import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'



class Footer extends Component {
  render() {
    return (
      <FootWrap id="footer">
        <div className="logo">
          DAY<span className="trip">TRIPPER</span>
        </div>
        <div className="info">
          <div><Link to='/'>Home</Link></div>
          <div>About</div>
        </div>
      </FootWrap>
    );
  }
}

export default Footer;


const FootWrap = styled.div`
  width: 100vw;
  height: 10vw;
  display: flex;
  background-color: black;
  color: white;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  .logo {
    margin-left: 10vw;
    font-family: "Anton", sans-serif;
    font-size: 2vw;
  }
  .trip {
    font-family: "Lobster", cursive;
    font-size: 3vw;
  }
  .info {
    display: flex;
    justify-content: space-around;
    width: 15vw;
    margin-right: 10vw;
    font-family: "Anton", sans-serif;
    a {
      text-decoration: none;
    }
    a:visited {
      color: white;
    }

  }
`;
