import React, { Component } from 'react';
import styled from 'styled-components'

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
.logo {
    margin-left: 4vw;
    font-size: 3vw;
    font-family:'Lobster', cursive;;
}
.signs {
    display: flex;
    margin-right: 3vw;
    justify-content: space-around;
    width: 20vw;
}
h1{
    font-family: 'Lobster', cursive;
}
`

class Navbar extends Component {
    render() {
        return (
            <NavWrap>
                <div className="logo">Daytrippr</div>
                <div className="signs">
                    <div>Sign Up</div>
                    <div>Log In</div>
                </div>
           
            </NavWrap>
        );
    }
}

export default Navbar;