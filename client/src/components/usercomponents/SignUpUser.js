import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const FormWrap = styled.div`
  background-size: cover;
  background-color: black;
  z-index: 100;
  position: fixed;
  height: 100vh;
  width: 100vw;
  .letter-box {
    display: block;
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
    h1 {
      color: white;
    }
      form {
        display: block;
        margin: auto;
      }
      input {
        height: 20px;
      }
    }
`;
const ButtonWrap = styled.div`
  text-align: center;
  margin: 28px auto;
`;

class SignUpUser extends Component {
  state = {
    newUser: {
      username: "",
      email: "",
      image: "",
      location: ""
    }
  };

  handleChange = event => {
    event.preventDefault();

    const name = event.target.name;
    const newUser = { ...this.state.newUser };
    newUser[name] = event.target.value;
    this.setState({ newUser: newUser });
  };

  createUser = async event => {
    event.preventDefault();

    const payload = {
      user: {
        username: this.state.newUser.username,
        email: this.state.newUser.email,
        image: this.state.newUser.image,
        location: this.state.newUser.location
      }
    };
    console.log(payload);
    try {
      await axios.post(`/api/users`, payload);
      console.log(payload);
      await this.props.getAllUsers();
      this.setState({
        newUser: {
          username: "",
          email: "",
          image: "",
          location: ""
        }
      });

      await this.props.history.push("/destinations");
      await this.props.toggleShowLogin();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <FormWrap>
        <h1>Sign Up</h1>
        <div className="letter-box">
          <form onSubmit={this.createUser}>
            <input
              className="inputs"
              name="username"
              onChange={this.handleChange}
              type="text"
              placeholder="User Name"
              value={this.state.newUser.username}
              required
            />
            <input
              className="inputs"
              name="image"
              onChange={this.handleChange}
              type="text"
              placeholder="Image URL"
              value={this.state.newUser.image}
              required
            />
            <input
              className="inputs"
              name="email"
              onChange={this.handleChange}
              type="text"
              placeholder="EMAIL"
              value={this.state.newUser.email}
              required
            />
            <input
              className="inputs"
              name="location"
              onChange={this.handleChange}
              type="text"
              placeholder="Location"
              value={this.state.newUser.location}
              required
            />

            <ButtonWrap>
              <button type="submit">SignUP</button>
              <button onClick={this.props.toggleShowLogin}>Home</button>
            </ButtonWrap>
          </form>
        </div>
      </FormWrap>
    );
  }
}

export default SignUpUser;
