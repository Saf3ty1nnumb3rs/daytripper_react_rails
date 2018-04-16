import React, { Component } from "react";
import styled from "styled-components";
import SignUpUser from "../usercomponents/SignUpUser";

const LandingWrap = styled.div`
  background-image: url("");
  background-size: cover;
  background-color: black;
  z-index: 100;
  position: fixed;
  height: 100vh;
  width: 100vw;
  .letter-box {
    display: flex;
    position: fixed;
    top: 20vh;
    color: white;
    margin: 0 10vw 20vw 50vw;
    background-color: #88888875;
    border-bottom: 1px solid purple;
    border-top: 1px solid purple;
    padding: 1em 2em;
    p {
      font-size: 2vw;
    }
    span {
      font-family: "Lobster", cursive;
    }
    @media (max-width: 510px) {
      top: 36vh;
      margin: auto;
    }
  }
`;
const ButtonWrap = styled.div` 
    position: absolute;
    top: 20px;
    right: 4vw;
`


class LandingView extends Component {
    
    

  render() {
    return (
      <div>
        {this.props.showSignUp ? (
          <SignUpUser
            toggleShowLogin={this.props.toggleSignUp}
            showLogin={this.props.showSignUp}
          />
        ) : (
          <LandingWrap>
            <ButtonWrap>
              <button onClick={this.props.toggleSignUp}> SignUp</button>
            </ButtonWrap>
            <div className="letter-box">
              <p>
                Get Lost With <span>Daytrippr</span>
              </p>
            </div>
          </LandingWrap>
        )}
      </div>
    );
  }
}

export default LandingView;
