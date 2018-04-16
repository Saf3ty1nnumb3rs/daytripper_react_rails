import React, { Component } from "react";
import styled from "styled-components";

const OverWrap = styled.div`
  background-image: url("https://media.bizj.us/view/img/3972271/skyline-of-atlanta*1024xx1600-900-0-1384.jpg");
  background-size: cover;
  z-index: 1000;
  position: fixed;
  height: 100vh;
  width: 100vw;
  #modal .menu-overlay {
    position: fixed;
    background: rgb(14, 37, 110);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const FormWrap = styled.div`
  max-width: 40vw;
  height: auto;
  min-height: 530px;
  min-width: 300px;
  margin: 10px auto;
  align-content: center;
  h1 {
    color: white;
  }
  div.card {
    min-height: 540px;
    max-height: 540px;
    background-color: lightgray;
    div.pad {
      margin: 50px 2px;
      input {
        margin: 10px auto;
        height: 50px;
      }
    }
  }
`;
const ButtonWrap = styled.div`
  text-align: center;
  margin: 28px auto;
`;

class SignUpUser extends Component {
  render() {
    return (
      <OverWrap id="modal" className="menu-overlay">
        <FormWrap>
          <h1>Sign Up</h1>
          <div centered raised>
            <div className="pad">
              <form onSubmit={this.createNewPost}>
                <input
                  className="inputs"
                  name="first_name"
                  onChange=""
                  type="text"
                  placeholder="first name"
                  value=""
                  required
                />
                <input
                  className="inputs"
                  name="last_name"
                  onChange=""
                  type="text"
                  placeholder="last name"
                  value=""
                  required
                />
                <input
                  className="inputs"
                  placeholder="Photo Url"
                  name="img"
                  onChange=""
                  value=""
                />

                <input
                  large
                  className="inputs"
                  name="email"
                  onChange=""
                  placeholder="EMAIL"
                  type="text"
                  value=""
                  required
                />

                <ButtonWrap>
                  <button type="submit" onClick={this.props.toggleShowLogin}>
                    SignUP
                  </button>
                </ButtonWrap>
              </form>
            </div>
          </div>
        </FormWrap>
      </OverWrap>
    );
  }
}

export default SignUpUser;
