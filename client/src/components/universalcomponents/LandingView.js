import React, { Component } from "react";
import styled from "styled-components";
import SignUpUser from "../usercomponents/SignUpUser";
import { Link } from "react-router-dom";

const LandingWrap = styled.div`
  background-size: cover;
  background-color: black;
  z-index: 100;
  position: fixed;
  height: 100vh;
  width: 100vw;
  .letter-box {
    display: flex;
    position: fixed;
    height: 40vh;
    top: 20vh;
    right: 0;
    left: 0;
    color: white;
    background-color: #88888875;
    border-bottom: 1px solid purple;
    border-top: 1px solid purple;
    padding: 1em 2em;
    p {
      margin-left: 18vw;
      font-size: 2vw;
      font-family: "Anton", sans-serif;
    }
    a {
      text-decoration: none;
    }
    a:visited {
      color: transparent;
    }
    span {
      background-image: url("https://media0.giphy.com/media/SYrMAmJZT4YcU/giphy.gif");
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px white;
      color: white;
      font-family: "Lobster", cursive;
      font-size: 10vw;
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
  button {
    background: transparent;
    color: white;
    font-size: 1.5vw;
    border: none;
  }
`;

class LandingView extends Component {
  render() {
    return (
      <div>
        {this.props.showSignUp ? (
          <SignUpUser
            {...this.props}
            getAllUsers={this.props.getAllUsers}
            toggleShowLogin={this.props.toggleSignUp}
            showSignUp={this.props.showSignUp}
          />
        ) : (
          <LandingWrap>
            <ButtonWrap>
              <button onClick={() => this.props.toggleSignUp()}> SignUp</button>
              <button>Log In</button>
            </ButtonWrap>
            <div className="letter-box">
              <p>
                Get Lost...With{" "}
                <Link to="/destinations">
                  <span>Daytrippr</span>
                </Link>
              </p>
            </div>
          </LandingWrap>
        )}
      </div>
    );
  }
}

export default LandingView;
