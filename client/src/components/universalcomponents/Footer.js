import React, { Component } from "react";
import styled from "styled-components";

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
  }
  .info {
      margin-right: 10vw;
  }
`;

class Footer extends Component {
  render() {
    return (
      <FootWrap id="footer">
        <div className="logo">DAYTRIPPER</div>
        <div className="info">
          <div>Home</div>
          <div>About</div>
        </div>
      </FootWrap>
    );
  }
}

export default Footer;
